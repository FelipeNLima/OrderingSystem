import { IsNumber, IsString } from 'class-validator';

export class PaymentsDto {
  @IsNumber()
  id: number;

  @IsString()
  salesOrderID: string;

  @IsString()
  inStoreOrderID: string;

  @IsString()
  qrCode: string;

  @IsNumber()
  orderID: number;

  @IsString()
  status: string;
}
