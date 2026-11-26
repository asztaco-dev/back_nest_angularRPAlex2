import { User } from '../interfaces/user.interface';
import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  MaxLength,
} from 'class-validator';

export class LoginAuthDto implements Pick<User, 'email' | 'password'> {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MinLength(6)
  @MaxLength(25)
  @IsNotEmpty()
  password: string;
}