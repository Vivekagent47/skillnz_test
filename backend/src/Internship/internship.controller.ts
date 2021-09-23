import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InternshipService } from './internship.service';

@Controller('internship')
export class InternshipController {
  constructor(private readonly internshipService: InternshipService) {}

  @Post()
  addInternShip(
    @Body('job') job: string,
    @Body('company_name') company_name: string,
    @Body('company_website') company_website: string,
    @Body('about_company') about_company: string,
    @Body('skills') skills: Array<string>,
    @Body('job_location') job_location: string,
    @Body('min_stipen') min_stipen: number,
    @Body('max_stipen') max_stipen: number,
    @Body('currency') currency: string,
    @Body('start_date') start_date: Date,
    @Body('apply_by') apply_by: Date,
    @Body('job_period') job_period: number,
    @Body('no_of_opening') no_of_opening: number,
    @Body('job_des') job_des?: string,
    @Body('job_respons') job_respons?: Array<string>,
    @Body('who_can_apply') who_can_apply?: Array<string>,
  ): any {
    const genId = this.internshipService.insertInternship(
      job,
      company_name,
      company_website,
      about_company,
      skills,
      job_location,
      min_stipen,
      max_stipen,
      currency,
      start_date,
      apply_by,
      job_period,
      no_of_opening,
      job_des,
      job_respons,
      who_can_apply,
    );
    return {
      id: genId,
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
