import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// MODULE
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), HttpModule, UserModule],
  providers: [],
  exports: [],
  controllers: [],
})
export class AppModule {}
