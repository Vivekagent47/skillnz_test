import { MaxLength, MinLength, IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserType } from '../../utils';

/**
 * User create/ registration dto
 */
export class CreateUserDto {
  /**
   * user first name
   */
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  readonly firstName: string;

  /**
   * user first name
   */
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  readonly lastName: string;

  /**
   * user email
   */
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(320)
  @ApiProperty()
  readonly email: string;

  /**
   * user 4-12 char long password
   */
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(22)
  @ApiProperty({
    minLength: 8,
    maxLength: 22,
  })
  readonly password: string;

  @ApiProperty()
  readonly mobileNumber: number;

  @ApiProperty()
  readonly countryCode: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly userType: UserType;
}
