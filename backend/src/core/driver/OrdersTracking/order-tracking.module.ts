import { Module } from '@nestjs/common';
import { OrdersTrackingRepository } from 'src/adapters/applications/ports/ordersTrackingRepository';
import { OrdersTrackingService } from 'src/adapters/applications/services/ordersTracking.service';
import { OrdersTrackingAdapter } from 'src/adapters/persistence/ordersTracking.adapter';
import { PrismaService } from 'src/services/prisma.service';
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
