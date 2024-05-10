import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CategoriesService } from 'src/adapters/applications/services/categories.service';
import { CategoriesDto } from './dtos/categories.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get(':id')
  async getCategoriesByID(@Param('id') id: number) {
    try {
      const categories = await this.categoriesService.getById(Number(id));
      return categories;
    } catch (err) {
      throw new ConflictException('Categories could not be list');
    }
  }

  @Post()
  async saveCategories(@Body() dto: CategoriesDto) {
    try {
      const categories = await this.categoriesService.create(dto);
      return categories;
    } catch (err) {
      throw new ConflictException('Categories could not be created');
    }
  }

  @Patch()
  async updateCategories(@Body() dto: CategoriesDto) {
    try {
      const categories = await this.categoriesService.update(dto);
      return categories;
    } catch (err) {
      throw new ConflictException('Categories could not be created');
    }
  }

  @Delete(':id')
  async deleteCategories(@Param('id') id: number) {
    try {
      const categories = await this.categoriesService.delete(Number(id));
      return categories;
    } catch (err) {
      throw new ConflictException('Categories could not be created');
    }
  }
}
