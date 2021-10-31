import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/shared/shared.module';
import { UserModule } from 'src/user/user.module';
import { InternshipController } from './internship.controller';
import { Internship } from './internship.entity';
import { InternshipRepository } from './internship.repository';
import { InternshipService } from './internship.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Internship, InternshipRepository]),
    forwardRef(() => SharedModule),
    forwardRef(() => UserModule),
  ],
  exports: [InternshipService],
  providers: [InternshipService],
  controllers: [InternshipController],
})
export class InternshipModule {}
