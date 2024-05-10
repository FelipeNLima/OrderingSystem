import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { paymentsMethods } from 'src/enums/paymentsMethods';
import { PrismaService } from 'src/services/prisma.service';
import { QRCodeService } from 'src/services/qrcode.service';
import { OrdersRepository } from '../applications/ports/ordersRepository';
import { Orders } from '../domain/orders';
import { Payments } from '../domain/payments';

@Injectable()
export class OrdersAdapter implements OrdersRepository {
  constructor(
    private prisma: PrismaService,
    private qrCode: QRCodeService,
  ) {}

  async getOrderById(id: number): Promise<Orders | null> {
    try {
      const order = await this.prisma.orders.findUnique({
        where: { id },
        include: {
          orderItens: true,
          payments: true,
          orderTracking: true,
        },
      });
      return order;
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }

  async saveOrder(orders: Orders): Promise<Orders> {
    try {
      let order: Orders;
      let payment: Payments;

      const body = {
        transaction_amount: orders?.amount,
        description: `QRCODE-${orders.customerID}-${new Date()}`,
        payment_method_id: paymentsMethods.CREDITCARD,
        payer: {
          email: 'N/D',
        },
      };

      const results = await this.qrCode.create({ body });

      if (results) {
        const salesOrderID = randomUUID();
        payment = {
          id: results?.id,
          salesOrderID: salesOrderID,
          createdApproved: results?.date_approved ?? '',
          paymentMethod: results?.payment_method_id ?? '',
          paymentType: results?.payment_type_id ?? '',
          status: results?.status ?? '',
          statusDetail: results?.status_detail ?? '',
          externalReference: results?.external_reference ?? '',
          transactionAmount: results?.transaction_amount ?? 0,
          qrCode: results.point_of_interaction?.transaction_data?.qr_code ?? '',
          qrCodeBase64:
            results.point_of_interaction?.transaction_data?.qr_code_base64 ??
            '',
          ticketUrl:
            results.point_of_interaction?.transaction_data?.ticket_url ?? '',
        };

        order = {
          salesOrderID: salesOrderID,
          customerID: orders?.customerID,
          amount: orders?.amount,
          orderItens: orders?.orderItens,
          payments: [payment],
          orderTracking: [{ salesOrderID }],
        };
      } else {
        throw new Error('Não gerou o QRCode de pagamento');
      }

      return await this.prisma.orders.create({
        data: {
          ...order,
          orderItens: { create: orders.orderItens },
          payments: { create: orders.payments },
          orderTracking: { create: orders.orderTracking },
        },
        include: {
          orderItens: true,
          payments: true,
          orderTracking: true,
        },
      });
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }

  async updateOrder(orders: Orders): Promise<Orders> {
    try {
      return await this.prisma.orders.update({
        where: {
          id: orders.id,
        },
        data: {
          ...orders,
          orderItens: { create: orders.orderItens },
          payments: { create: orders.payments },
          orderTracking: { create: orders.orderTracking },
        },
        include: {
          orderItens: true,
          payments: true,
          orderTracking: true,
        },
      });
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }

  async deleteOrder(id: number): Promise<Orders> {
    try {
      const order = await this.prisma.orders.delete({
        where: { id },
        include: {
          orderItens: true,
          payments: true,
          orderTracking: true,
        },
      });

      return order;
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }
}
