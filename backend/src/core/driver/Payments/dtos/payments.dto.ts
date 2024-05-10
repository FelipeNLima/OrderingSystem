import {
  IsBase64,
  IsDate,
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
  @IsDate()
  createdApproved: Date;

  @IsDefined()
  @IsString()
  paymentMethodID: string;

  @IsDefined()
  @IsString()
  paymentTypeID: string;

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
}
