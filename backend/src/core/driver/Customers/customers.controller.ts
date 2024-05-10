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
import { CustomerService } from 'src/adapters/applications/services/customer.service';
import { CustomersDto } from './dtos/customers.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomerService) {}

  @Get(':id')
  async getByID(@Param('id') id: number) {
    try {
      const customer = await this.customerService.getById(Number(id));
      return customer;
    } catch (err) {
      throw new ConflictException('Customer could not be list');
    }
  }

  @Post()
  async save(@Body() dto: CustomersDto) {
    try {
      const customer = await this.customerService.create(dto);
      return customer;
    } catch (err) {
      throw new ConflictException('Customer could not be created');
    }
  }

  @Patch()
  async update(@Body() dto: CustomersDto) {
    try {
      const customer = await this.customerService.update(dto);
      return customer;
    } catch (err) {
      throw new ConflictException('Customer could not be updated');
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    try {
      const customer = await this.customerService.delete(Number(id));
      return customer;
    } catch (err) {
      throw new ConflictException('Customer could not be deleted');
    }
  }
}
