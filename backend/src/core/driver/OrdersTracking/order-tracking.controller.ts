import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
} from '@nestjs/common';
import { OrdersTrackingService } from 'src/adapters/applications/services/ordersTracking.service';
import { OrdersTrackingDto } from './dtos/order-tracking.dto';

@Controller('ordersTracking')
export class OrdersTrackingController {
  constructor(private readonly ordersTrackingService: OrdersTrackingService) {}

  @Get(':id')
  async getByID(@Param('id') id: number) {
    try {
      const tracking = await this.ordersTrackingService.getById(Number(id));
      return tracking;
    } catch (err) {
      throw new ConflictException('Order Tracking could not be list');
    }
  }

  @Patch()
  async update(@Body() dto: OrdersTrackingDto) {
    try {
      const tracking = await this.ordersTrackingService.update(dto);
      return tracking;
    } catch (err) {
      throw new ConflictException('Order Tracking could not be updated');
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    try {
      const tracking = await this.ordersTrackingService.delete(Number(id));
      return tracking;
    } catch (err) {
      throw new ConflictException('Order Tracking could not be deleted');
    }
  }
}
