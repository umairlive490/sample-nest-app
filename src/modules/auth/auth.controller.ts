import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/LoginUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  @UsePipes(ValidationPipe)
  loginUser(@Body() loginUserDto: LoginUserDto) {
    const loggedInUser = this.authService.loginUser(loginUserDto);
    if (loggedInUser) return loggedInUser;
    else throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }
}
