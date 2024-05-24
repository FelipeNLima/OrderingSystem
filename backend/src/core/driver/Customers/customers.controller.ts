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
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { CustomerService } from 'src/adapters/applications/services/customer.service';
import { Roles } from 'src/core/guard/decorators/roles.decorator';
import { CustomersDto } from './dtos/customers.dto';

@ApiTags('Clientes')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomerService) {}

  @Get(':id')
  @ApiHeader({
    name: 'user',
    description: 'ID do usuário ADMIN',
  })
  @Roles(['admin'])
  async getByID(@Param('id') id: number) {
    try {
      const customer = await this.customerService.getById(Number(id));
      return customer;
    } catch (err) {
      throw new ConflictException('Customer could not be list');
    }
  }

  @Get(':cpf')
  @ApiHeader({
    name: 'user',
    description: 'ID do usuário ADMIN',
  })
  @Roles(['admin'])
  async getByCpf(@Param('cpf') cpf: number) {
    try {
      const customer = await this.customerService.getByCpf(Number(cpf));
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
  @ApiHeader({
    name: 'user',
    description: 'ID do usuário ADMIN',
  })
  @Roles(['admin'])
  async update(@Body() dto: CustomersDto) {
    try {
      const customer = await this.customerService.update(dto);
      return customer;
    } catch (err) {
      throw new ConflictException('Customer could not be updated');
    }
  }

  @Delete(':id')
  @ApiHeader({
    name: 'user',
    description: 'ID do usuário ADMIN',
  })
  @Roles(['admin'])
  async delete(@Param('id') id: number) {
    try {
      const customer = await this.customerService.delete(Number(id));
      return customer;
    } catch (err) {
      throw new ConflictException('Customer could not be deleted');
    }
  }
}
