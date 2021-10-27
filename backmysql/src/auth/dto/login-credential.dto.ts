import { IsEmail, IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Login credential body
 */
export class LoginCredential {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  readonly email: string;

  @MinLength(8)
  @MaxLength(22)
  @ApiProperty()
  readonly password: string;
}
