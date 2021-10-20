import { MaxLength, MinLength, IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * User create/ registration dto
 */
export class CreateUserDto {
  /**
   * user name
   */
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  readonly name: string;

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
  @MinLength(8)
  @MaxLength(22)
  @ApiProperty({
    minLength: 8,
    maxLength: 22,
  })
  readonly password: string;
}
