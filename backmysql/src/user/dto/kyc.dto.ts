import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export type Scoial = {
  type: string;
  link: string;
};

export class KycDto {
  @IsNotEmpty()
  @ApiProperty()
  readonly companyName: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly establishmentDate: Date;

  @IsNotEmpty()
  @ApiProperty()
  readonly companySize: number;

  @IsNotEmpty()
  @ApiProperty()
  readonly headOffice: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly branchOffice: string[];

  // @IsNotEmpty()
  // @ApiProperty()
  // readonly companyLogo: string;

  @IsNotEmpty()
  @MinLength(50)
  @MaxLength(250)
  @ApiProperty()
  readonly aboutCompany: string;

  @IsNotEmpty()
  @ApiProperty({
    isArray: true,
    example: [{ type: 'facebook', link: 'https://facebook.com' }],
  })
  readonly socials: Scoial[];
}
