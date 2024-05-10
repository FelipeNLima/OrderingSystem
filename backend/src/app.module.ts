import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './core/driver/Categories/categories.module';
import { CustomersModule } from './core/driver/Customers/customers.module';
import { OrdersModule } from './core/driver/Orders/orders.module';
import { OrderTrackingModule } from './core/driver/OrdersTracking/order-tracking.module';
import { PaymentsModule } from './core/driver/Payments/payments.module';
import { ProductsModule } from './core/driver/Products/products.module';
import { HealthModule } from './health/health.module';
import { PrismaService } from './services/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HealthModule,
    CustomersModule,
    CategoriesModule,
    ProductsModule,
    PaymentsModule,
    OrdersModule,
    OrderTrackingModule,
  ],
  providers: [PrismaService],
  exports: [],
  controllers: [],
})
export class AppModule {}
