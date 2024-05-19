import { IsNumber, IsOptional, IsString } from 'class-validator';

export class PaymentsDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsOptional()
  @IsString()
  salesOrderID: string;

  @IsOptional()
  @IsString()
  inStoreOrderID: string;

  @IsOptional()
  @IsString()
  qrCode: string;

  @IsOptional()
  @IsNumber()
  orderID: number;
}
