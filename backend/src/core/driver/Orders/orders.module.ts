import { Module } from '@nestjs/common';
import { OrdersRepository } from 'src/adapters/applications/ports/ordersRepository';
import { OrdersService } from 'src/adapters/applications/services/orders.service';
import { OrdersAdapter } from 'src/adapters/persistence/orders.adapter';
import { PrismaService } from 'src/services/prisma.service';
import { OrdersController } from './orders.controller';

@Module({
  imports: [],
  controllers: [OrdersController],
  providers: [
    { provide: OrdersRepository, useClass: OrdersAdapter },
    OrdersService,
    PrismaService,
  ],
})
export class OrdersModule {}
