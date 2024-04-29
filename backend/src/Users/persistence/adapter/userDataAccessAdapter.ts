import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { UserModel } from 'src/Users/domain/model/user.model';
import { UserDataAccessPort } from 'src/Users/domain/ports/port-out';

@Injectable()
export class UserDataAccessAdapter implements UserDataAccessPort {
  constructor(private prisma: PrismaService) {}

  async save(user: UserModel): Promise<UserModel> {
    try {
      return await this.prisma.user.create({ data: user });
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }

  async listAll(): Promise<UserModel[]> {
    try {
      return await this.prisma.user.findMany();
    } catch (error) {
      throw new Error(error?.meta?.details);
    }
  }
}
