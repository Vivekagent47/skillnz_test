import { Module } from "@nestjs/common";
import { InternshipController } from "../Controllers/internship.controller";
import { InternshipService } from "../Services/internship.service";

@Module({
  controllers: [InternshipController],
  providers: [InternshipService]
})

export class InternshipModule {};