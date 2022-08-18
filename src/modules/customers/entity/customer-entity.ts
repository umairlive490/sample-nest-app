import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateAddressDto } from '../dto/CreateAddress.dto';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  // @Column()
  // address: CreateAddressDto;
}
