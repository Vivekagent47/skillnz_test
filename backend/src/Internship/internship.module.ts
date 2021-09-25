import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InternshipController } from './internship.controller';
import { InternshipSchema } from './internship.model';
import { InternshipService } from './internship.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Internship', schema: InternshipSchema },
    ]),
  ],
  controllers: [InternshipController],
  providers: [InternshipService],
})
export class InternshipModule {}
