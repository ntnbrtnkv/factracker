import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/user/user.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser({ username, password }: UserDTO): Promise<any> {
    const serviceUser = await this.userService.findOne(username);
    if (serviceUser && serviceUser.password === password) {
      const { password, ...result } = serviceUser;
      return result;
    }
    return null;
  }
}
