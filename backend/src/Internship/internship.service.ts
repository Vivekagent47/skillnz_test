import { Injectable, NotFoundException } from '@nestjs/common';
import { Internship } from './internship.model';

@Injectable()
export class InternshipService {
  private internShips: Internship[] = [];

  insertInternship(
    job: string,
    company_name: string,
    company_website: string,
    about_company: string,
    skills: Array<string>,
    job_location: string,
    min_stipen: number,
    max_stipen: number,
    currency: string,
    start_date: Date,
    apply_by: Date,
    job_period: number,
    no_of_opening: number,
    job_des?: string,
    job_respons?: Array<string>,
    who_can_apply?: Array<string>,
  ) {
    const id = Math.random().toString();
    const job_id = Math.random().toString();
    const created_at = new Date();

    const newInternship = new Internship(
      id,
      job,
      job_id,
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
      created_at,
      job_period,
      no_of_opening,
      job_des,
      job_respons,
      who_can_apply,
    );

    this.internShips.push(newInternship);
    return id;
  }

  getInternship() {
    return [...this.internShips];
  }

  getSingleInternship(internshipId: string) {
    const internship = this.internShips.find(
      (data) => data.id === internshipId,
    );

    if (!internship) {
      throw new NotFoundException('Could not find internship');
    }
    return { ...internship };
  }
}
