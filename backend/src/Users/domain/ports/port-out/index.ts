import { UserModel } from '../../model/user.model';

export abstract class UserDataAccessPort {
  abstract listAll(): Promise<UserModel[]>;
  abstract save(User: UserModel): Promise<UserModel>;
}
