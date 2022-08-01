import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/CreateCustomer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../customers/entity/customer-entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  getCustomers(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  getCustomerById(id: number): Promise<Customer> {
    return this.customerRepository.findOneBy({ id });
  }

  createCustomer(createCustomerDto: CreateCustomerDto) {
    const customer = this.customerRepository.create(createCustomerDto);
    this.customerRepository.save(customer);
  }
}
