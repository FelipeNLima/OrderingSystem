// Step 1: Import the parts of the module you want to use
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { randomUUID } from 'crypto';
import { MercadoPagoConfig, Payment } from 'mercadopago';
import { PaymentResponse } from 'mercadopago/dist/clients/payment/commonTypes';
import { PaymentCreateData } from 'mercadopago/dist/clients/payment/create/types';

@Injectable()
export class QRCodeService {
  constructor(private readonly config: ConfigService) {}

  async create(body: PaymentCreateData): Promise<PaymentResponse> {
    try {
      // Step 1: Initialize the client object
      const client = new MercadoPagoConfig({
        accessToken: this.config.get<string>('TOKEN_MERCADO_PAGO') ?? '',
        options: { timeout: 5000, idempotencyKey: randomUUID() },
      });

      // Step 2: Initialize the API object
      const payment = new Payment(client);
      return await payment.create(body);
    } catch (error) {
      throw new Error(error);
    }
  }
}
