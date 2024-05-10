import { Module } from '@nestjs/common';
import { CustomersRepository } from 'src/adapters/applications/ports/customersRepository';
import { CustomerService } from 'src/adapters/applications/services/customer.service';
import { CustomersAdapter } from 'src/adapters/persistence/customers.adapter';
import { PrismaService } from 'src/services/prisma.service';
import { CustomersController } from './customers.controller';

@Module({
  imports: [],
  controllers: [CustomersController],
  providers: [
    { provide: CustomersRepository, useClass: CustomersAdapter },
    PrismaService,
    CustomerService,
  ],
})
export class CustomersModule {}
