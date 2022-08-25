import { IsNotEmpty } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  zip: string;

  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  country: string;
}
