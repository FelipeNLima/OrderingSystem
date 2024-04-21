import { IsDefined, IsOptional, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsOptional()
  id: string;

  @IsString()
  @IsOptional()
  createdAt: string;

  @IsString()
  @IsOptional()
  modifiedAt: string;

  @IsDefined()
  @IsString()
  firstName: string;

  @IsDefined()
  @IsString()
  lastName: string;

  @IsDefined()
  @IsString()
  email: string;

  @IsDefined()
  @IsString()
  password: string;

  @IsDefined()
  @IsString()
  hash: string;
}
