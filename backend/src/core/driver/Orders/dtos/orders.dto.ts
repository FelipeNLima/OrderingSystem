import {
  IsArray,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { OrdersTrackingDto } from '../../OrdersTracking/dtos/order-tracking.dto';
import { PaymentsDto } from '../../Payments/dtos/payments.dto';
import { OrderItensDto } from './orders-itens.dto';

export class OrdersDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsOptional()
  @IsDate()
  createdAt: Date;

  @IsOptional()
  @IsDate()
  updatedAt: Date;

  @IsOptional()
  @IsString()
  salesOrderID: string;

  @IsOptional()
  @IsNumber()
  customerID: number;

  @IsOptional()
  @IsNumber()
  amount: number;

  @IsArray()
  orderItens: OrderItensDto[];

  @IsOptional()
  @IsArray()
  payments: PaymentsDto[];

  @IsOptional()
  @IsArray()
  orderTracking: OrdersTrackingDto[];
}
