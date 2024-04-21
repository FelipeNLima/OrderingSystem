import { randomUUID } from 'crypto';

export class User {
  public id?: string;
  public createdAt?: string;
  public modifiedAt?: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public hash: string;

  static async new(data: User) {
    const user = new User();

    user.id = randomUUID();
    user.firstName = data.firstName;
    user.lastName = data.lastName;
    user.email = data.email;
    user.createdAt = new Date().toISOString();
    user.modifiedAt = new Date().toISOString();
    return user;
  }
}
