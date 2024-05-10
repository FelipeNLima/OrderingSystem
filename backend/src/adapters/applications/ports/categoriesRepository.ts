import { Categories } from 'src/adapters/domain/categories';

export abstract class CategoriesRepository {
  abstract getCategoriesById(id: number): Promise<Categories | null>;
  abstract saveCategories(categories: Categories): Promise<Categories>;
  abstract updateCategories(categories: Categories): Promise<Categories>;
  abstract deleteCategoriesById(id: number): Promise<Categories>;
}
