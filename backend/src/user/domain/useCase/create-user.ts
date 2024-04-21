import { Injectable } from '@nestjs/common';
import { User } from '../model/user.model';
import { CreateUserPort } from '../port/primary/create-user.port';
import { UserDataAccessPort } from '../port/secondary/user.data-access-port';

@Injectable()
export class CreateUserUseCase implements CreateUserPort {
  constructor(private trainerDataAccessPort: UserDataAccessPort) {}

  async save(user: User): Promise<User> {
    const newUser = await User.new(user);
    return this.trainerDataAccessPort.save(newUser);
  }
}
