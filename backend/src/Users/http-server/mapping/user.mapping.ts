import { Injectable } from '@nestjs/common';
import { UserModel } from 'src/Users/domain/model/user.model';
import { CreateUserDTO } from '../dtos/create-user.dto';

@Injectable()
export class UserMapping {
  public mapDtoToInterface = (dto: CreateUserDTO): UserModel => {
    const email = dto.email ?? undefined;
    const name = dto.name ?? undefined;
    const cpf = dto.cpf ?? undefined;
    const isAdmin = dto.isAdmin ?? false;
    const createdAt = new Date();
    const updatedAt = new Date();

    return { email, name, cpf, isAdmin, createdAt, updatedAt };
  };
}
