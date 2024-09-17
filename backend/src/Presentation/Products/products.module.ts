import { Module } from '@nestjs/common';
import { ProductsService } from '../../Application/services/products.service';
import { ProductsAdapter } from '../../Domain/Adapters/products.adapter';

import { ProductsRepository } from '../../Domain/Repositories/productsRepository';
import { PrismaService } from '../../Infrastructure/Apis/prisma.service';
import { ProductsController } from './products.controller';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [
    { provide: ProductsRepository, useClass: ProductsAdapter },
    ProductsService,
    PrismaService,
  ],
})
export class ProductsModule {}
