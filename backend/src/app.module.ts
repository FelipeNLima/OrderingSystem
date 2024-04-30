import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './Users/http-server/user.module';
import { HealthModule } from './health/health.module';
import { PrismaService } from './services/prisma.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UserModule, HealthModule],
  providers: [PrismaService],
  exports: [],
  controllers: [],
})
export class AppModule {}
