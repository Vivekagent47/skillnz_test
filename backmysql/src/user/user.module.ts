import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRepository])],
  exports: [UserService],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
