import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Apply Internship Entity
 */
@Entity()
export class ApplyInternship {
  /**
   * Primary key id
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Applicant/Student id
   */
  @Column()
  userId: string;

  /**
   * Answers of the questions
   */
  @Column('longtext')
  answers: string;
}
