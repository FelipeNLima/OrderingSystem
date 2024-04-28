import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { UserModel } from 'src/Users/domain/model/user.model';
import { UserDataAccessPort } from 'src/Users/domain/ports/port-out';

@Injectable()
export class UserDataAccessAdapter implements UserDataAccessPort {
  constructor(private prisma: PrismaService) {}

  async save(user: UserModel): Promise<UserModel> {
    try {
      const newUser = await this.prisma.user.create({ data: user });
      return newUser;
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }

  async listAll(): Promise<UserModel[]> {
    try {
      const newUser = await this.prisma.user.findMany();
      return newUser;
    } catch (error) {
      throw new Error(error?.meta?.details);
    }
  }
}
