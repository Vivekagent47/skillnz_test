import { Internship } from '../internship.entity';

export class PaginatedResultDto {
  data: Internship[];
  page: number;
  limit: number;
  totalCount: number;
}
