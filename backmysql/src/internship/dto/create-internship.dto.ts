import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

/**
 * Internship create dto
 */
export class CreateInternshipDto {
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(30)
  @ApiProperty()
  readonly jobName: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly companyName: string;

  @ApiProperty()
  readonly companyUrl: string;

  @MaxLength(400)
  @ApiProperty()
  readonly aboutCompany: string;

  @MaxLength(400)
  @ApiProperty()
  readonly jobDescription: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly skills: string[];

  @ApiProperty()
  readonly minStipen: number;

  @ApiProperty()
  readonly maxStipen: number;

  @ApiProperty()
  readonly currencyType: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly noOfOpening: number;

  @IsNotEmpty()
  @ApiProperty()
  readonly internshipType: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly internshipPeriod: number;

  @IsNotEmpty()
  @ApiProperty()
  readonly startDate: Date;

  @IsNotEmpty()
  @ApiProperty()
  readonly applyBy: Date;

  @ApiProperty()
  readonly responsibilities: string[];

  @ApiProperty()
  readonly whoCanApply: string[];
}
