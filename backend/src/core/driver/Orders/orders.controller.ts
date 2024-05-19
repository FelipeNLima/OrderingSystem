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
import { OrdersService } from 'src/adapters/applications/services/orders.service';
import { OrdersDto } from './dtos/orders.dto';

@ApiTags('Pedido')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get(':id')
  async getByID(@Param('id') id: number) {
    try {
      const order = await this.ordersService.getById(Number(id));
      return order;
    } catch (err) {
      throw new ConflictException('Order could not be list');
    }
  }

  @Post()
  async save(@Body() dto: OrdersDto) {
    try {
      const order = await this.ordersService.create(dto);
      return order;
    } catch (err) {
      throw new ConflictException('Order could not be created');
    }
  }

  @Patch()
  async update(@Body() dto: OrdersDto) {
    try {
      const order = await this.ordersService.update(dto);
      return order;
    } catch (err) {
      throw new ConflictException('Order could not be updated');
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    try {
      const products = await this.ordersService.delete(Number(id));
      return products;
    } catch (err) {
      throw new ConflictException('Order could not be deleted');
    }
  }
}
