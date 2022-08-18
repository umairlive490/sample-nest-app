import { Type } from 'class-transformer';
import { IsNumber, IsString, ValidateNested } from 'class-validator';
//import { CreateAddressDto } from './CreateAddress.dto';

export class CreateCustomerDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsNumber()
  age: number;

  // @ValidateNested()
  // @Type(() => CreateAddressDto)
  // address: CreateAddressDto;
}
