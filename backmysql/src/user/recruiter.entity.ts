import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

export type Gender = 'male' | 'female' | 'other';

/**
 * User entity
 */
@Entity()
export class Recruiter {
  /**
   * Primary key id
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Gender
   */
  @Column()
  gender: Gender;

  /**
   * Current Location right now
   */
  @Column()
  currentLocation: string;

  /**
   * Kyc details
   */
  @Column()
  kyc: string;

  /**
   * posted internships
   */
  @Column('simple-array')
  postedInternship: string[];

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
}
