import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InternshipModule } from './Modules/internship.module';

@Module({
  imports: [InternshipModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
