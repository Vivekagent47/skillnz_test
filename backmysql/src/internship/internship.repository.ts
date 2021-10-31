import { EntityRepository, Repository } from 'typeorm';
import { Internship } from './internship.entity';

@EntityRepository(Internship)
export class InternshipRepository extends Repository<Internship> {}
