import { Module } from '@nestjs/common';

import { OrdersTrackingService } from '../../Application/services/ordersTracking.service';
import { OrdersTrackingAdapter } from '../../Domain/Adapters/ordersTracking.adapter';
import { OrdersTrackingRepository } from '../../Domain/Repositories/ordersTrackingRepository';
import { PrismaService } from '../../Infrastructure/Apis/prisma.service';
import { OrdersTrackingController } from './order-tracking.controller';

@Module({
  imports: [],
  controllers: [OrdersTrackingController],
  providers: [
    { provide: OrdersTrackingRepository, useClass: OrdersTrackingAdapter },
    OrdersTrackingService,
    PrismaService,
  ],
})
export class OrderTrackingModule {}
