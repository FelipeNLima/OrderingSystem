import { Injectable } from '@nestjs/common';
import { PrismaService } from '../applications/apis/prisma.service';
import { CustomersRepository } from '../applications/ports/customersRepository';
import { Customers } from '../domain/customer';

@Injectable()
export class CustomersAdapter implements CustomersRepository {
  constructor(private prisma: PrismaService) {}

  async getCustomerById(id: number): Promise<Customers | null> {
    try {
      return await this.prisma.customer.findUnique({ where: { id } });
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }

  async getCustomerByCpf(cpf: number): Promise<Customers | null> {
    try {
      return await this.prisma.customer.findUnique({ where: { cpf } });
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }

  async getCheckIsAdmin(id: number): Promise<boolean> {
    try {
      const customer = await this.prisma.customer.findUnique({
        where: { id },
      });

      return Boolean(customer?.isAdmin);
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }

  async saveCustomer(customer: Customers): Promise<Customers> {
    try {
      return await this.prisma.customer.create({ data: customer });
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }

  async updateCustomer(customer: Customers): Promise<Customers> {
    try {
      return await this.prisma.customer.update({
        where: {
          id: customer.id,
        },
        data: customer,
      });
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }

  async deleteCustomerById(id: number): Promise<Customers> {
    try {
      return await this.prisma.customer.delete({ where: { id } });
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }
}
