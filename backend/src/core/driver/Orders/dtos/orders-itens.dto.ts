import { IsDefined, IsNumber, IsOptional, IsString } from 'class-validator';

export class OrderItensDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsDefined()
  @IsString()
  name: string;

  @IsDefined()
  @IsNumber()
  quantity: number;

  @IsDefined()
  @IsNumber()
  priceUnit: number;

  @IsDefined()
  @IsNumber()
  productID: number;

  @IsOptional()
  @IsNumber()
  parentID: number;
}
