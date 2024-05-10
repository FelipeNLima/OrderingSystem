import { Orders } from 'src/adapters/domain/orders';

export abstract class OrdersRepository {
  abstract getOrderById(id: number): Promise<Orders | null>;
  abstract saveOrder(order: Orders): Promise<Orders>;
  abstract updateOrder(order: Orders): Promise<Orders>;
  abstract deleteOrder(id: number): Promise<Orders>;
}
