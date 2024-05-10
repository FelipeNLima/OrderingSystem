import {
  IsBase64,
  IsDefined,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class PaymentsDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsOptional()
  @IsString()
  salesOrderID: string;

  @IsOptional()
  @IsString()
  createdApproved: string;

  @IsDefined()
  @IsString()
  paymentMethod: string;

  @IsDefined()
  @IsString()
  paymentType: string;

  @IsDefined()
  @IsString()
  status: string;

  @IsDefined()
  @IsString()
  statusDetail: string;

  @IsDefined()
  @IsString()
  externalReference: string;

  @IsDefined()
  @IsNumber()
  transactionAmount: number;

  @IsDefined()
  @IsString()
  qrCode: string;

  @IsDefined()
  @IsBase64()
  qrCodeBase64: string;

  @IsDefined()
  @IsString()
  ticketUrl: string;

  @IsDefined()
  @IsNumber()
  orderID: number;
}
