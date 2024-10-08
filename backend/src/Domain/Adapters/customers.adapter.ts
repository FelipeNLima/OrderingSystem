import { Injectable } from '@nestjs/common';
import { AwsCognitoService } from 'src/Infrastructure/Apis/cognito.service';
import { PrismaService } from '../../Infrastructure/Apis/prisma.service';
import { Customers } from '../Interfaces/customer';
import { CustomersRepository } from '../Repositories/customersRepository';
import { removeMaskCpf } from '../Utils/removeMaskCpf';

@Injectable()
export class CustomersAdapter implements CustomersRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cognito: AwsCognitoService,
  ) {}

  async getCustomerById(id: number): Promise<Customers | null> {
    try {
      return await this.prisma.customer.findUnique({ where: { id } });
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }

  async getCustomerByCpf(cpf: string): Promise<Customers | null> {
    try {
      let newCpf = cpf;
      if (newCpf) {
        newCpf = removeMaskCpf(cpf);
        if (newCpf.length > 11) {
          throw new Error('cpf invalido');
        }
      } else {
        throw new Error('cpf invalido');
      }

      return await this.prisma.customer.findUnique({
        where: { cpf: newCpf },
      });
    } catch (error) {
      const message =
        error?.message || error?.meta?.target || error?.meta?.details;
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
      let customerData = customer;
      if (customer?.cpf) {
        const newCpf = removeMaskCpf(customer?.cpf);
        if (newCpf.length > 11) {
          throw new Error('cpf invalido');
        }

        customerData = { ...customerData, cpf: newCpf };
      }

      const response = await this.prisma.customer.create({
        data: customerData,
      });

      // SAVE USER IN COGNITO
      await this.cognito.saveCognitoUser(customerData);

      return response;
    } catch (error) {
      const message =
        error?.message || error?.meta?.target || error?.meta?.details;
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
