import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class PaginationDto {
  @IsNotEmpty()
  @ApiProperty()
  page: number;

  @ApiProperty()
  limit: number;
}
