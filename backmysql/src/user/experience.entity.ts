import { Exclude } from 'class-transformer';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Experience {
  @PrimaryGeneratedColumn()
  id: number;

  @Exclude()
  @CreateDateColumn()
  createdAt: Date;

  @Exclude()
  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  experienceType: string;

  @Column()
  experienceStatus: string;

  @Column()
  designation: string;

  @Column()
  company: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  description: string;
}
