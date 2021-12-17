import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Recruiter } from './recruiter.entity';
import { Student } from './student.entity';
import {
  UserRepository,
  StudentRepository,
  RecruiterRepository,
  KYCRepository,
} from './user.repository';
import { UserService } from './user.service';
import { RecruiterController, UserController } from './user.controller';
import { KYC } from './kyc.entity';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, UserRepository]),
    TypeOrmModule.forFeature([Student, StudentRepository]),
    TypeOrmModule.forFeature([Recruiter, RecruiterRepository]),
    TypeOrmModule.forFeature([KYC, KYCRepository]),
    forwardRef(() => SharedModule),
  ],
  exports: [UserService],
  providers: [UserService],
  controllers: [UserController, RecruiterController],
})
export class UserModule {}
