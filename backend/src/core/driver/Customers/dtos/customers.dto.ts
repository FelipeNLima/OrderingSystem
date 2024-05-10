import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CustomersDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  cpf: string;

  @IsOptional()
  @IsBoolean()
  isAdmin: boolean;
}
