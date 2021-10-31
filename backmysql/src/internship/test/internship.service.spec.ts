import { Test, TestingModule } from '@nestjs/testing';
import { InternshipService } from '../internship.service';

describe('InternshipService', () => {
  let service: InternshipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InternshipService],
    }).compile();

    service = module.get<InternshipService>(InternshipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
