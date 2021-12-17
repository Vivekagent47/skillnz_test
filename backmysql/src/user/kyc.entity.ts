import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class KYC {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  kycStatus: boolean;

  @Column()
  companyName: string;

  @Column()
  establishmentDate: Date;

  @Column()
  companySize: number;

  @Column()
  headOffice: string;

  @Column('simple-array')
  branchOffice: string[];

  // @Column()
  // companyLogo: string;

  @Column({ length: 240 })
  aboutCompany: string;

  // recruiter: Recruiter;

  @Column()
  socials: string;
}
