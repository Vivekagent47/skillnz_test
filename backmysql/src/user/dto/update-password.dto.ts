import { MaxLength, IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Password Update dto
 */
export class UpdatePasswordDto {
  /**
   * user email
   */
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(320)
  @ApiProperty()
  readonly email: string;

  /**
   * Old password
   */
  @IsNotEmpty()
  @ApiProperty()
  readonly prvPassword: string;

  /**
   * New password
   */
  @IsNotEmpty()
  @ApiProperty()
  readonly newPassword: string;
}
