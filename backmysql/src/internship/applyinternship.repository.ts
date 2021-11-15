import { EntityRepository, Repository } from 'typeorm';
import { ApplyInternship } from './applyinternship.entity';

@EntityRepository(ApplyInternship)
export class ApplyInternshipRepository extends Repository<ApplyInternship> {}
