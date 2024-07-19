import { Payments } from 'src/adapters/domain/payments';

export abstract class PaymentsRepository {
  abstract getPaymentsById(id: number): Promise<Payments | null>;
  abstract getPaymentsByOrderId(orderID: number): Promise<Payments | null>;
  abstract savePayment(payment: Payments): Promise<Payments> ;
}
