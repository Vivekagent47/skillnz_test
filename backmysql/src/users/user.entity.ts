import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsString, MaxLength, MinLength } from "class-validator";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  @MinLength(1)
  @MaxLength(20)
  @IsString()
  firstName: string;

  @Column({ length: 20 })
  @MinLength(1)
  @MaxLength(20)
  @IsString()
  lastName: string;

  @Column()
  @MinLength(1)
  userType: string;
}
