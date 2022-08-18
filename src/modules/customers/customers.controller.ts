import {
  Controller,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  HttpStatus,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/CreateCustomer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get('/')
  getCustomers() {
    const customers = this.customersService.getCustomers();
    if (customers) return customers;
    else throw new HttpException('Customers not found', HttpStatus.NOT_FOUND);
  }

  @Get('/:id')
  getCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customersService.getCustomerById(id);
    if (customer) return customer;
    else throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    this.customersService.createCustomer(createCustomerDto);
  }
}
