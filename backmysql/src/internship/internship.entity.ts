import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

export type Category =
  | 'engineering'
  | 'commerce'
  | 'management'
  | 'science'
  | 'arts'
  | 'medical'
  | 'law'
  | 'humanities'
  | 'other';

// export type Applied = {
//   studentID: string;
//   answers: Answer[];
// };

// export type Answer = {
//   questionID: string;
//   answer: string;
// };

export type AnsType = 'number' | 'string';

export type Question = {
  id: number;
  question: string;
  ansType: AnsType;
};

export type InternshipType = 'workfromhome' | 'onsite';

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
  @CreateDateColumn({ name: 'createdAt' })
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

  @Column()
  compensation: boolean;

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
  @Column({ type: 'enum', enum: ['workfromhome', 'onsite'] })
  internshipType: InternshipType;

  @Column()
  location: string;

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
  perks: string[];

  /**
   * Category of the internship
   * @example engineering, commerce, management, science, arts, medical, law, humanities, other
   */
  @Column({
    type: 'enum',
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
  category: Category;

  @Column('longtext')
  questions: string;

  @Column()
  interview: boolean;

  @Column()
  prePlacementOffer: boolean;
}
