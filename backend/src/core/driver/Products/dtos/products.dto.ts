import {
  IsDate,
  IsDefined,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class ProductsDto {
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
  @IsString()
  name: string;

  @IsDefined()
  @IsNumber()
  priceUnit: number;

  @IsDefined()
  @IsNumber()
  categoryID: number;
}
