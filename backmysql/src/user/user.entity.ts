import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Exclude } from 'class-transformer';

export type UserRole = 'admin' | 'user';

export type UserType = 'student' | 'recruiter';

/**
 * User entity
 */
@Entity()
export class User {
  /**
   * Primary key id
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * first name
   */
  @Column({ length: 50, nullable: false })
  firstName: string;

  /**
   *last name
   */
  @Column({ length: 50, nullable: false })
  lastName: string;

  /**
   * email
   */
  @Unique('email', ['email'])
  @Column({ length: 320, nullable: false })
  email: string;

  /**
   * password
   */
  @Exclude()
  @Column({ length: 100, nullable: false })
  password: string;

  /**
   * user activation status
   */
  @Column({ name: 'is_active' })
  isActive: boolean;

  /**
   * user roles: admin, user
   */
  @Column('simple-array')
  roles: UserRole[];

  /**
   * user type: student or recuiter
   */
  @Column()
  userType: UserType;

  /**
   * country code
   */
  @Column()
  countryCode: string;

  /**
   * mobile number
   */
  @Column({ length: 10 })
  mobileNumber: string;

  /**
   * user profile
   */
  @Column()
  profile: string;

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
