import { Injectable } from '@nestjs/common';
import { Categories } from '../../Domain/Interfaces/categories';
import { ProductsByCategory } from '../../Domain/Interfaces/productsByCategory';
import { CategoriesRepository } from '../../Domain/Repositories/categoriesRepository';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async getById(id: number): Promise<Categories | null> {
    return this.categoriesRepository.getCategoriesById(id);
  }

  async getProductByCategoryID(
    categoryID: number,
  ): Promise<ProductsByCategory | null> {
    return this.categoriesRepository.getProductByCategoryID(categoryID);
  }

  async create(categories: Categories): Promise<Categories> {
    return this.categoriesRepository.saveCategories(categories);
  }

  async update(categories: Categories): Promise<Categories> {
    return this.categoriesRepository.updateCategories(categories);
  }

  async delete(id: number): Promise<Categories> {
    return this.categoriesRepository.deleteCategoriesById(id);
  }
}
