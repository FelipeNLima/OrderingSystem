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
import { ApiTags } from '@nestjs/swagger';
import { CategoriesService } from 'src/adapters/applications/services/categories.service';
import { Roles } from 'src/core/guard/decorators/roles.decorator';
import { CategoriesDto } from './dtos/categories.dto';

@ApiTags('Categorias')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get(':id')
  @Roles(['admin'])
  async getCategoriesByID(@Param('id') id: number) {
    try {
      const categories = await this.categoriesService.getById(Number(id));
      return categories;
    } catch (err) {
      throw new ConflictException('Categories could not be list');
    }
  }

  //TODO criar rota para trazer os produtos filtrando pela categoria

  @Post()
  @Roles(['admin'])
  async saveCategories(@Body() dto: CategoriesDto) {
    try {
      const categories = await this.categoriesService.create(dto);
      return categories;
    } catch (err) {
      throw new ConflictException('Categories could not be created');
    }
  }

  @Patch()
  @Roles(['admin'])
  async updateCategories(@Body() dto: CategoriesDto) {
    try {
      const categories = await this.categoriesService.update(dto);
      return categories;
    } catch (err) {
      throw new ConflictException('Categories could not be created');
    }
  }

  @Delete(':id')
  @Roles(['admin'])
  async deleteCategories(@Param('id') id: number) {
    try {
      const categories = await this.categoriesService.delete(Number(id));
      return categories;
    } catch (err) {
      throw new ConflictException('Categories could not be created');
    }
  }
}
