import { Payments } from 'src/adapters/domain/payments';

export abstract class PaymentsRepository {
  abstract getPaymentsById(id: number): Promise<Payments | null>;
  abstract savePayments(payments: Payments): Promise<Payments>;
  abstract updatePayments(payments: Payments): Promise<Payments>;
}
