import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserPort } from './domain/port/primary/create-user.port';
import { UserDataAccessPort } from './domain/port/secondary/user.data-access-port';
import { CreateUserUseCase } from './domain/useCase/create-user';
import { UserController } from './http-server/controller/user.controller';
import { UserDataAccessAdapter } from './persistence/adapter/user.adapter';
import { UserEntity } from './persistence/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
    { provide: CreateUserPort, useClass: CreateUserUseCase },
    { provide: UserDataAccessPort, useClass: UserDataAccessAdapter },
  ],
})
export class UserModule {}
