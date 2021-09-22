import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { InternshipService } from "../Services/internship.service";

@Controller('internship')
export class InternshipController {
  constructor(private readonly internshipService: InternshipService) {}
  
  @Post()
  addInternShip(
    @Body("position") internPos: string, 
    @Body("company_name") internCompanyName: string
  ): any {
    const genId = this.internshipService.insertInternship(internPos, internCompanyName);
    return {
      id: genId
    };
  }

  @Get()
  getAllInternShip() {
    return this.internshipService.getInternship(); 
  }

  @Get(':id')
  getInternShip(@Param('id') internShipId: string) {
    return this.internshipService.getSingleInternship(internShipId);
  }
}