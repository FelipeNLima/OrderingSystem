import { Injectable } from '@nestjs/common';
import { PrismaService } from '../applications/apis/prisma.service';
import { CategoriesRepository } from '../applications/ports/categoriesRepository';
import { Categories } from '../domain/categories';

@Injectable()
export class CategoriesAdapter implements CategoriesRepository {
  constructor(private prisma: PrismaService) {}

  async getCategoriesById(id: number): Promise<Categories | null> {
    try {
      return await this.prisma.categories.findUnique({ where: { id } });
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }

  async saveCategories(categories: Categories): Promise<Categories> {
    try {
      return await this.prisma.categories.create({ data: categories });
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }

  async updateCategories(customer: Categories): Promise<Categories> {
    try {
      return await this.prisma.categories.update({
        where: {
          id: customer.id,
        },
        data: customer,
      });
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }

  async deleteCategoriesById(id: number): Promise<Categories> {
    try {
      return await this.prisma.categories.delete({ where: { id } });
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }
}
