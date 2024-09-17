import { Module } from '@nestjs/common';

import { PaymentsService } from '../../Application/services/payments.service';
import { PaymentsAdapter } from '../../Domain/Adapters/payments.adapter';
import { PaymentsRepository } from '../../Domain/Repositories/paymentsRepository';
import { PrismaService } from '../../Infrastructure/Apis/prisma.service';
import { ConfirmPaymentListener } from '../../Infrastructure/Events/listeners/confirmPayment.listener';
import { PaymentsController } from './payments.controller';

@Module({
  imports: [],
  controllers: [PaymentsController],
  providers: [
    { provide: PaymentsRepository, useClass: PaymentsAdapter },
    PaymentsService,
    PrismaService,
    ConfirmPaymentListener,
  ],
})
export class PaymentsModule {}
