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
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/CreateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  getUsers() {
    const users = this.usersService.getUsers();
    if (users) return users;
    else throw new HttpException('Users not found', HttpStatus.NOT_FOUND);
  }

  @Get('/:id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const users = this.usersService.getUserById(id);
    if (users) return users;
    else throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDto: CreateUserDto) {
    const user = this.usersService.createUser(createUserDto);
    if (user) return user;
    else
      throw new HttpException('Failed to create user', HttpStatus.BAD_REQUEST);
  }
}
