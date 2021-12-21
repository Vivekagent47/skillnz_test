import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class Education {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Exclude()
  @CreateDateColumn()
  createdAt: Date;

  @Exclude()
  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  instituteName: string;

  @Column()
  degree: string;

  @Column()
  fieldOfStudy: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  status: string;
}
