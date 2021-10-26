import { ApiProperty } from '@nestjs/swagger';

/**
 * RefreshToken dto
 */
export class RefreshTokenDto {
  /**
   * access token
   */
  @ApiProperty()
  readonly refreshToken: string;
}
