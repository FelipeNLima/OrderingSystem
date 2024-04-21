import {
  Body,
  ConflictException,
  Controller,
  Logger,
  Post,
} from '@nestjs/common';
import { CreateUserPort } from 'src/user/domain/port/primary/create-user.port';
import { CreateUserDTO } from '../dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly createUserPort: CreateUserPort) {}

  @Post('/')
  async save(@Body() dto: CreateUserDTO) {
    try {
      const user = await this.createUserPort.save({
        ...dto,
        hash: dto.password,
      });
      return user;
    } catch (err) {
      Logger.error(err);
      throw new ConflictException('User could not be created');
    }
  }
}
