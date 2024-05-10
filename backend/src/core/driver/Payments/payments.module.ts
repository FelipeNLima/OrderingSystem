import { Module } from '@nestjs/common';
import { PaymentsRepository } from 'src/adapters/applications/ports/paymentsRepository';
import { PaymentsService } from 'src/adapters/applications/services/payments.service';
import { PaymentsAdapter } from 'src/adapters/persistence/payments.adapter';
import { PrismaService } from 'src/services/prisma.service';
import { PaymentsController } from './payments.controller';

@Module({
  imports: [],
  controllers: [PaymentsController],
  providers: [
    { provide: PaymentsRepository, useClass: PaymentsAdapter },
    PaymentsService,
    PrismaService,
  ],
})
export class PaymentsModule {}
