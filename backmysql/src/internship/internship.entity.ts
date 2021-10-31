import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

/**
 * Internship Entity
 */
@Entity()
export class Internship {
  /**
   * Primary key id
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * created at
   */
  @Exclude()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  /**
   * updated at
   */
  @Exclude()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  /**
   * activation status
   */
  @Column()
  isActive: boolean;

  /**
   * Job name like UI/UX Designer
   */
  @Column({ length: 30, nullable: false })
  jobName: string;

  /**
   * Company Name like Skillz
   */
  @Column({ nullable: false })
  companyName: string;

  /**
   * Website Link of company
   */
  @Column()
  companyUrl: string;

  /**
   * About the company
   */
  @Column({ length: 400 })
  aboutCompany: string;

  /**
   * Job Description or about the role of internship/job
   */
  @Column({ length: 400 })
  jobDescription: string;

  /**
   * Array of skills in string like ["reactjs", "vuejs"]
   */
  @Column('simple-array')
  skills: string[];

  /**
   * Min value of stipen
   */
  @Column()
  minStipen: number;

  /**
   * Max value of stipen
   */
  @Column()
  maxStipen: number;

  /**
   * Currency type of stipen
   */
  @Column()
  currencyType: string;

  /**
   * No of opening for the positionn
   */
  @Column()
  noOfOpening: number;

  /**
   * Work for Home or if Office work then place name
   */
  @Column()
  internshipType: string;

  /**
   * Internship period only in months
   */
  @Column()
  internshipPeriod: number;

  /**
   * Statring date of job/internship
   */
  @Column()
  startDate: Date;

  /**
   * Last date of applying
   */
  @Column()
  applyBy: Date;

  /**
   * Responsibilities of role
   */
  @Column('simple-array')
  responsibilities: string[];

  /**
   * Who is eligible for the position
   */
  @Column('simple-array')
  whoCanApply: string[];
}
