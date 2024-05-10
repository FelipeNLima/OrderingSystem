import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { OrdersTrackingRepository } from '../applications/ports/ordersTrackingRepository';
import { OrdersTracking } from '../domain/ordersTracking';

@Injectable()
export class OrdersTrackingAdapter implements OrdersTrackingRepository {
  constructor(private prisma: PrismaService) {}

  async getTrackingById(id: number): Promise<OrdersTracking | null> {
    try {
      return await this.prisma.orderTracking.findUnique({ where: { id } });
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }

  async saveTracking(tracking: OrdersTracking): Promise<OrdersTracking> {
    try {
      return await this.prisma.orderTracking.create({ data: tracking });
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }

  async updateTracking(tracking: OrdersTracking): Promise<OrdersTracking> {
    try {
      return await this.prisma.orderTracking.update({
        where: {
          id: tracking.id,
        },
        data: tracking,
      });
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }

  async deleteTracking(id: number): Promise<OrdersTracking> {
    try {
      return await this.prisma.orderTracking.delete({ where: { id } });
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }
}
