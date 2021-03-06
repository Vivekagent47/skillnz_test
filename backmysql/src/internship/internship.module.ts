import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../shared/shared.module';
import { UserModule } from '../user/user.module';
import { ApplyInternship } from './applyinternship.entity';
import { ApplyInternshipRepository } from './applyinternship.repository';
import { InternshipController } from './internship.controller';
import { Internship } from './internship.entity';
import { InternshipRepository } from './internship.repository';
import { InternshipService } from './internship.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Internship, InternshipRepository]),
    TypeOrmModule.forFeature([ApplyInternship, ApplyInternshipRepository]),
    forwardRef(() => SharedModule),
    forwardRef(() => UserModule),
  ],
  exports: [InternshipService],
  providers: [InternshipService],
  controllers: [InternshipController],
})
export class InternshipModule {}
