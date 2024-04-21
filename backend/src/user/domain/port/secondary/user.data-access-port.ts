import { User } from '../../model/user.model';

export abstract class UserDataAccessPort {
  abstract save(trainer: User): Promise<User>;
}
