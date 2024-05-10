import { IsNumber, IsOptional } from 'class-validator';

export class OrdersDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsOptional()
  @IsNumber()
  customerID: number;

  @IsOptional()
  @IsNumber()
  paymentID: number;

  @IsOptional()
  @IsNumber()
  amount: number;

  @IsOptional()
  @IsNumber()
  parentID: number;
}
