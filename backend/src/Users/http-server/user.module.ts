import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateUserPort } from '../domain/ports/port-in';
import { UserDataAccessPort } from '../domain/ports/port-out';
import { CreateUserUseCase } from '../domain/usecase/createUserUseCase';
import { UserDataAccessAdapter } from '../persistence/adapter/userDataAccessAdapter';
import { UserMapping } from './mapping/user.mapping';
import { UserController } from './user.controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    { provide: CreateUserPort, useClass: CreateUserUseCase },
    { provide: UserDataAccessPort, useClass: UserDataAccessAdapter },
    PrismaService,
    UserMapping,
  ],
})
export class UserModule {}
