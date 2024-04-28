import { Body, ConflictException, Controller, Get, Post } from '@nestjs/common';
import { CreateUserPort } from '../domain/ports/port-in';
import { UserDataAccessPort } from '../domain/ports/port-out';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UserMapping } from './mapping/user.mapping';

@Controller('user')
export class UserController {
  constructor(
    private readonly createUserPort: CreateUserPort,
    private readonly userDataAccessPort: UserDataAccessPort,
    private readonly userMapping: UserMapping,
  ) {}

  @Get()
  async ListUser() {
    try {
      const user = await this.userDataAccessPort.listAll();
      return user;
    } catch (err) {
      throw new ConflictException('User could not be list');
    }
  }

  @Post()
  async save(@Body() dto: CreateUserDTO) {
    try {
      const user = await this.createUserPort.save(
        this.userMapping.mapDtoToInterface(dto),
      );
      return user;
    } catch (err) {
      throw new ConflictException('User could not be created');
    }
  }
}
