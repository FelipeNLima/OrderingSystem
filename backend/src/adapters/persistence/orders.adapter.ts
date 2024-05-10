import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { OrdersRepository } from '../applications/ports/ordersRepository';
import { Orders } from '../domain/orders';

@Injectable()
export class OrdersAdapter implements OrdersRepository {
  constructor(private prisma: PrismaService) {}

  async getOrderById(id: number): Promise<Orders | null> {
    try {
      return await this.prisma.orders.findUnique({ where: { id } });
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }

  async saveOrder(orders: Orders): Promise<Orders> {
    try {
      return await this.prisma.orders.create({ data: orders });
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
        data: orders,
      });
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }

  async deleteOrder(id: number): Promise<Orders> {
    try {
      return await this.prisma.orders.delete({ where: { id } });
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }
}
