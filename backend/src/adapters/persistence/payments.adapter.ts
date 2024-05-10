import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { PaymentsRepository } from '../applications/ports/paymentsRepository';
import { Payments } from '../domain/payments';

@Injectable()
export class PaymentsAdapter implements PaymentsRepository {
  constructor(private prisma: PrismaService) {}

  async getPaymentsById(id: number): Promise<Payments | null> {
    try {
      return await this.prisma.payments.findUnique({ where: { id } });
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }

  async savePayments(payments: Payments): Promise<Payments> {
    try {
      return await this.prisma.payments.create({ data: payments });
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }

  async updatePayments(payments: Payments): Promise<Payments> {
    try {
      return await this.prisma.payments.update({
        where: {
          id: payments.id,
        },
        data: payments,
      });
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }
}
