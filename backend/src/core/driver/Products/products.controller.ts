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
import { ProductsService } from 'src/adapters/applications/services/products.service';
import { ProductsDto } from './dtos/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get(':id')
  async getByID(@Param('id') id: number) {
    try {
      const products = await this.productsService.getById(Number(id));
      return products;
    } catch (err) {
      throw new ConflictException('Product could not be list');
    }
  }

  @Post()
  async save(@Body() dto: ProductsDto) {
    try {
      const products = await this.productsService.create(dto);
      return products;
    } catch (err) {
      throw new ConflictException('Product could not be created');
    }
  }

  @Patch()
  async update(@Body() dto: ProductsDto) {
    try {
      const products = await this.productsService.update(dto);
      return products;
    } catch (err) {
      throw new ConflictException('Product could not be updated');
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    try {
      const products = await this.productsService.delete(Number(id));
      return products;
    } catch (err) {
      throw new ConflictException('Product could not be deleted');
    }
  }
}
