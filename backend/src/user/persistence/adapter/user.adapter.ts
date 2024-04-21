import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { UserDataAccessPort } from 'src/user/domain/port/secondary/user.data-access-port';
import { User } from 'src/user/domain/model/user.model';

@Injectable()
export class UserDataAccessAdapter implements UserDataAccessPort {
  constructor(
    @InjectRepository(UserEntity) private repository: Repository<UserEntity>,
  ) {}

  async save(user: User): Promise<User> {
    const newUser = this.repository.save({ ...user });
    return newUser;
  }
}
