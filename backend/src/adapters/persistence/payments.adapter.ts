import { Injectable } from '@nestjs/common';
import { PrismaService } from '../applications/apis/prisma.service';
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
}
