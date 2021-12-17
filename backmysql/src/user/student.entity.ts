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
export class Student {
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
