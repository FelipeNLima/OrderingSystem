import { Injectable } from '@nestjs/common';
import { Orders } from 'src/adapters/domain/orders';
import { OrdersRepository } from '../ports/ordersRepository';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}

  async getById(id: number): Promise<Orders | null> {
    return this.ordersRepository.getOrderById(id);
  }

  async create(order: Orders): Promise<Orders> {
    return this.ordersRepository.saveOrder(order);
  }

  async update(order: Orders): Promise<Orders> {
    return this.ordersRepository.updateOrder(order);
  }

  async delete(id: number): Promise<Orders> {
    return this.ordersRepository.deleteOrder(id);
  }
}
