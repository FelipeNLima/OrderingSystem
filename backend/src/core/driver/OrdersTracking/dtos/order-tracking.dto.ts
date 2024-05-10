import {
  IsDate,
  IsDefined,
  IsEnum,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { Status } from 'src/enums/status';

export class OrdersTrackingDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsOptional()
  @IsDate()
  createdAt: Date;

  @IsOptional()
  @IsDate()
  updatedAt: Date;

  @IsDefined()
  @IsEnum(Status)
  status: string;

  @IsOptional()
  @IsNumber()
  orderID: number;
}
