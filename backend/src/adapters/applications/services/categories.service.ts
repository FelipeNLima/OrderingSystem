import { Injectable } from '@nestjs/common';
import { Categories } from 'src/adapters/domain/categories';
import { CategoriesRepository } from '../ports/categoriesRepository';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async getById(id: number): Promise<Categories | null> {
    return this.categoriesRepository.getCategoriesById(id);
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
