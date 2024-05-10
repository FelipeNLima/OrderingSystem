import { OrdersTracking } from 'src/adapters/domain/ordersTracking';

export abstract class OrdersTrackingRepository {
  abstract getTrackingById(id: number): Promise<OrdersTracking | null>;
  abstract updateTracking(tracking: OrdersTracking): Promise<OrdersTracking>;
  abstract deleteTracking(id: number): Promise<OrdersTracking>;
}
