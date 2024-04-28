import { UserModel } from '../../model/user.model';

export abstract class CreateUserPort {
  abstract save(User: Partial<UserModel>): Promise<UserModel>;
}
