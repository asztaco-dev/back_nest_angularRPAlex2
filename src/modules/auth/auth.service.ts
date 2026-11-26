
import { Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(private jwtService: JwtService) {}

  login(userObj: LoginAuthDto) {

    const payload = {
      email: userObj.email,
      id: '1',
    };

    const token = this.jwtService.sign(payload);

    return {
      token: token,
    };

  }

}
