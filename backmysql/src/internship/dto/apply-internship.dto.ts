import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export type Answer = {
  questionID: number;
  answer: string | number;
};

export class ApplyInternshipDto {
  @IsNotEmpty()
  @ApiProperty({
    isArray: true,
    example: [{ questionID: 1, answer: 'answer' }],
  })
  readonly answers: Answer[];
}
