import { Module } from '@nestjs/common';

import { CustomerService } from '../../Application/services/customer.service';
import { CustomersAdapter } from '../../Domain/Adapters/customers.adapter';
import { CustomersRepository } from '../../Domain/Repositories/customersRepository';
import { PrismaService } from '../../Infrastructure/Apis/prisma.service';
import { CustomersController } from './customers.controller';

@Module({
  imports: [],
  controllers: [CustomersController],
  providers: [
    { provide: CustomersRepository, useClass: CustomersAdapter },
    PrismaService,
    CustomerService,
  ],
  exports: [CustomerService],
})
export class CustomersModule {}
