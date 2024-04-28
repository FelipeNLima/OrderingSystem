import { Injectable } from '@nestjs/common';
import { UserModel } from '../model/user.model';
import { CreateUserPort } from '../ports/port-in';
import { UserDataAccessPort } from '../ports/port-out';

@Injectable()
export class CreateUserUseCase implements CreateUserPort {
  constructor(private userDataAccessPort: UserDataAccessPort) {}

  async listAll(): Promise<UserModel[]> {
    return this.userDataAccessPort.listAll();
  }

  async save(user: UserModel): Promise<UserModel> {
    return this.userDataAccessPort.save(user);
  }
}
