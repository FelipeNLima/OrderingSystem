import { Injectable } from '@nestjs/common';
import { UserModel } from 'src/Users/domain/model/user.model';
import { CreateUserDTO } from '../dtos/create-user.dto';

@Injectable()
export class UserMapping {
  public mapDtoToInterface = (dto: CreateUserDTO): UserModel => {
    return { ...dto };
  };
}
