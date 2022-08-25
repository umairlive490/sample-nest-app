import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';
//import { CreateAddressDto } from './CreateAddress.dto';

export class CreateUserDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  // @ValidateNested()
  // @Type(() => CreateAddressDto)
  // address: CreateAddressDto;
}
