import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entity/user-entity';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/LoginUser.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  loginUser(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;
    const user = this.userRepository.find({ where: { email, password } });
    return user;
  }
}
