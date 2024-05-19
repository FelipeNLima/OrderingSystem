import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CustomersDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  email: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  cpf: number;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isAdmin: boolean;
}
