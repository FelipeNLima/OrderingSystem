import { IsDefined, IsNumber, IsOptional, IsString } from 'class-validator';

export class CategoriesDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsDefined()
  @IsString()
  type: string;
}
