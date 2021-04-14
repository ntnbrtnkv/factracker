import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO } from 'src/user/user.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(user: UserDTO): Promise<any> {
    const serviceUser = await this.authService.validateUser(user);
    if (!serviceUser) {
      throw new UnauthorizedException();
    }
    return serviceUser;
  }
}
