import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateAddressDto } from '../dto/CreateAddress.dto';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  type?: string;

  @Column({ nullable: true })
  validationToken?: string;

  // @Column()
  // address: CreateAddressDto;
}
