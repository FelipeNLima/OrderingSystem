// Step 1: Import the parts of the module you want to use
import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { randomUUID } from 'crypto';
import { MercadoPagoConfig, Payment } from 'mercadopago';

@Injectable()
export class QRCodeService implements OnModuleInit {
  constructor(private readonly config: ConfigService) {}

  async onModuleInit() {
    // Step 2: Initialize the client object
    const client = new MercadoPagoConfig({
      accessToken: this.config.get<string>('TOKEN_MERCADO_PAGO') ?? '',
      options: { timeout: 5000, idempotencyKey: randomUUID() },
    });

    // Step 3: Initialize the API object
    return new Payment(client);
  }
}
