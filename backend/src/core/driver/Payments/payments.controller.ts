import {
  Body,
  ConflictException,
  Controller,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PaymentsService } from 'src/adapters/applications/services/payments.service';
import { PaymentsDto } from './dtos/payments.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get(':id')
  async getByID(@Param('id') id: number) {
    try {
      const payments = await this.paymentsService.getById(Number(id));
      return payments;
    } catch (err) {
      throw new ConflictException('Payments could not be list');
    }
  }

  @Post()
  async save(@Body() dto: PaymentsDto) {
    try {
      const payments = await this.paymentsService.create(dto);
      return payments;
    } catch (err) {
      throw new ConflictException('Payments could not be created');
    }
  }

  @Patch()
  async update(@Body() dto: PaymentsDto) {
    try {
      const payments = await this.paymentsService.update(dto);
      return payments;
    } catch (err) {
      throw new ConflictException('Payments could not be updated');
    }
  }
}
