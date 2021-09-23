import { Module } from '@nestjs/common';
import { InternshipController } from './internship.controller';
import { InternshipService } from './internship.service';

@Module({
  controllers: [InternshipController],
  providers: [InternshipService],
})
export class InternshipModule {}
