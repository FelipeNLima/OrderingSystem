import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { OrdersService } from '../../Application/services/orders.service';
import { OrdersAdapter } from '../../Domain/Adapters/orders.adapter';
import { OrdersRepository } from '../../Domain/Repositories/ordersRepository';
import { PrismaService } from '../../Infrastructure/Apis/prisma.service';
import { QRCodeService } from '../../Infrastructure/Apis/qrcode.service';
import { OrdersController } from './orders.controller';

@Module({
  imports: [HttpModule],
  controllers: [OrdersController],
  providers: [
    { provide: OrdersRepository, useClass: OrdersAdapter },
    OrdersService,
    PrismaService,
    QRCodeService,
  ],
})
export class OrdersModule {}
