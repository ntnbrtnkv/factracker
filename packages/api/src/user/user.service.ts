import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDTO } from './user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  findOne(username: UserDTO['username']): Promise<UserEntity> {
    return this.userRepository.findOne(username);
  }

  create(user: UserDTO): Promise<UserEntity> {
    return this.userRepository.save(user);
  }
}
