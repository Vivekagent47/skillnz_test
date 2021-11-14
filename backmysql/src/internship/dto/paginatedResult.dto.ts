import { Internship } from '../internship.entity';

export class PaginatedResultDto {
  data: Internship[];
  currPage: number;
  prevPage: number;
  nextPage: number;
  totalPages: number;
  limit: number;
  totalCount: number;
}
