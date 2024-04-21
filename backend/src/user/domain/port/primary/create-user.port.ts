import { User } from '../../model/user.model';

export abstract class CreateUserPort {
  abstract save(User: Partial<User>): Promise<User>;
}
