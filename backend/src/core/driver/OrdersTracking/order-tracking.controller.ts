import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrdersTrackingService } from 'src/adapters/applications/services/ordersTracking.service';
import { Roles } from 'src/core/guard/decorators/roles.decorator';
import { OrdersTrackingDto } from './dtos/order-tracking.dto';

@ApiTags('Tracking do Pedido')
@Controller('ordersTracking')
export class OrdersTrackingController {
  constructor(private readonly ordersTrackingService: OrdersTrackingService) {}

  @Get()
  @Roles(['admin'])
  async getAll() {
    try {
      const tracking = await this.ordersTrackingService.getAll();
      return tracking;
    } catch (err) {
      throw new ConflictException('Order Tracking could not be list');
    }
  }

  @Get(':id')
  @Roles(['admin'])
  async getByID(@Param('id') id: number) {
    try {
      const tracking = await this.ordersTrackingService.getById(Number(id));
      return tracking;
    } catch (err) {
      throw new ConflictException('Order Tracking could not be list');
    }
  }

  @Patch()
  @Roles(['admin'])
  async update(@Body() dto: OrdersTrackingDto) {
    try {
      const tracking = await this.ordersTrackingService.update(dto);
      return tracking;
    } catch (err) {
      throw new ConflictException('Order Tracking could not be updated');
    }
  }

  @Delete(':id')
  @Roles(['admin'])
  async delete(@Param('id') id: number) {
    try {
      const tracking = await this.ordersTrackingService.delete(Number(id));
      return tracking;
    } catch (err) {
      throw new ConflictException('Order Tracking could not be deleted');
    }
  }
}
