import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateUserDTO {
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
