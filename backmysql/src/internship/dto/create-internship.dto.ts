import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { Category, InternshipType } from '../internship.entity';

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

  @IsNotEmpty()
  @ApiProperty()
  readonly compensation: boolean;

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
  @ApiProperty({ enum: ['workfromhome', 'onsite'] })
  readonly internshipType: InternshipType;

  @ApiProperty()
  readonly location: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly internshipPeriod: number;

  @IsNotEmpty()
  @ApiProperty()
  readonly startDate: Date;

  @IsNotEmpty()
  @ApiProperty()
  readonly applyBy: Date;

  @IsNotEmpty()
  @ApiProperty()
  readonly responsibilities: string[];

  @IsNotEmpty()
  @ApiProperty()
  readonly perks: string[];

  @IsNotEmpty()
  @ApiProperty({
    enum: [
      'engineering',
      'commerce',
      'management',
      'science',
      'arts',
      'medical',
      'law',
      'humanities',
      'other',
    ],
  })
  readonly category: Category;

  @IsNotEmpty()
  @ApiProperty()
  readonly interview: boolean;

  @IsNotEmpty()
  @ApiProperty()
  readonly prePlacementOffer: boolean;
}
