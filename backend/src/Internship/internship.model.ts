// import * as mongoose from 'mongoose';

// export const InternshipSchema = new mongoose.Schema({
//   job: String,

// });

export class Internship {
  constructor(
    public id: string,
    public job: string,
    public job_id: string,
    public company_name: string,
    public company_website: string,
    public about_company: string,
    public skills: Array<string>,
    public job_location: string,
    public min_stipen: number,
    public max_stipen: number,
    public currency: string,
    public start_date: Date,
    public apply_by: Date,
    public created_at: Date,
    public job_period: number,
    public no_of_opening: number,
    public job_des?: string,
    public job_respons?: Array<string>,
    public who_can_apply?: Array<string>,
  ) {}
}
