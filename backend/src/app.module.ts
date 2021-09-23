import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InternshipModule } from './Internship/internship.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    InternshipModule,
    MongooseModule.forRoot(
      'mongodb+srv://skillzen:5byYMrTGXXYbJq1e@skilzen.gjl0x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
