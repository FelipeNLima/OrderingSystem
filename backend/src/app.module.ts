import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './Users/http-server/user.module';
import { PrismaService } from './services/prisma.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UserModule],
  providers: [PrismaService],
  exports: [],
  controllers: [],
})
export class AppModule {}
