import { Role } from 'src/enums/role';

export class UserModel {
  id: number;
  email?: string;
  name?: string;
  cpf?: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}
