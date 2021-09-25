import * as mongoose from 'mongoose';

export const InternshipSchema = new mongoose.Schema({
  job: { type: String, require: true },
  company_name: { type: String, require: true },
  company_website: { type: String, require: true },
  about_company: { type: String, require: true },
  skills: [{ type: String, require: true }],
  job_location: { type: String, require: true },
  min_stipen: { type: Number, require: true },
  max_stipen: { type: Number, require: true },
  currency: { type: String, require: true },
  start_date: { type: Date, require: true },
  apply_by: { type: Date, require: true },
  created_at: { type: Date, require: true },
  job_period: { type: Number, require: true },
  no_of_opening: { type: Number, require: true },
  job_des: { type: String, require: false },
  job_respons: [{ type: String, require: false }],
  who_can_apply: [{ type: String, require: false }],
});

export interface Internship {
  id: string;
  job: string;
  company_name: string;
  company_website: string;
  about_company: string;
  skills: Array<string>;
  job_location: string;
  min_stipen: number;
  max_stipen: number;
  currency: string;
  start_date: Date;
  apply_by: Date;
  created_at: Date;
  job_period: number;
  no_of_opening: number;
  job_des?: string;
  job_respons?: Array<string>;
  who_can_apply?: Array<string>;
}
