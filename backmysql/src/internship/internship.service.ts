import {
  Injectable,
  Inject,
  forwardRef,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';

import { CreateInternshipDto } from './dto/create-internship.dto';
import { PaginatedResultDto } from './dto/paginatedResult.dto';
import { PaginationDto } from './dto/pagination.dto';
import { Internship } from './internship.entity';
import { UserService } from '../user';

/**
 * Internship Service
 */
@Injectable()
export class InternshipService {
  constructor(
    @InjectRepository(Internship)
    private readonly internshipRepo: Repository<Internship>,

    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,

    private readonly jwtService: JwtService,
  ) {}

  /**
   * Create Internship
   */
  async createInternship(
    token: string,
    data: CreateInternshipDto,
  ): Promise<Internship> {
    const internship = new Internship();
    internship.isActive = false;
    internship.jobName = data.jobName;
    internship.companyName = data.companyName;
    internship.companyUrl = data.companyUrl ? data.companyUrl : '';
    internship.aboutCompany = data.aboutCompany ? data.aboutCompany : '';
    internship.jobDescription = data.jobDescription ? data.jobDescription : '';
    internship.skills = data.skills;
    internship.compensation = data.compensation;

    if (data.compensation === true) {
      internship.minStipen = data.minStipen;
      internship.maxStipen = data.maxStipen;
      internship.currencyType = data.currencyType;
    } else {
      internship.minStipen = 0;
      internship.maxStipen = 0;
      internship.currencyType = '';
    }

    internship.noOfOpening = data.noOfOpening;
    internship.internshipType = data.internshipType;

    if (data.internshipType === 'onsite') {
      internship.location = data.location;
    } else {
      internship.location = '';
    }

    internship.internshipPeriod = data.internshipPeriod;
    internship.applyBy = data.applyBy;
    internship.startDate = data.startDate;
    internship.responsibilities = data.responsibilities;
    internship.perks = data.perks ? data.perks : [];
    internship.interview = data.interview;
    internship.prePlacementOffer = data.prePlacementOffer;
    internship.category = data.category;
    internship.questions = [
      {
        id: '1',
        question:
          'How many years of work experience do you have using Figma/sketch software ? ',
        ansType: 'number',
      },
      {
        id: '2',
        question:
          'Rate your self in figma tool skill out of 5? Where 5 being highest?',
        ansType: 'number',
      },
      {
        id: '3',
        question: 'Add the link to your design portfolio?',
        ansType: 'string',
      },
      {
        id: '4',
        question: 'Why do you think you are suitable for this role?',
        ansType: 'string',
      },
    ];

    let payload: any;

    try {
      payload = this.jwtService.verify(token.split(' ')[1]);
    } catch (err) {
      throw new Error('Invalid token');
    }

    const user = await this.userService.getUserById(payload.userId);

    try {
      if (!user.isActive) {
        throw new Error('Inactive user');
      }

      if (user.userType === 'recruiter' || user.roles.includes('admin')) {
        return await this.internshipRepo.save(internship);
      }

      throw new HttpException(
        'You are not authorized to create an internship',
        HttpStatus.UNAUTHORIZED,
      );
    } catch (error) {
      throw error;
    }
  }

  /**
   * gel paginated internship list
   */
  async getInternships(
    paginationDto: PaginationDto,
  ): Promise<PaginatedResultDto> {
    const skippedItems = (paginationDto.page - 1) * paginationDto.limit;

    const totalCount = await this.internshipRepo.count();
    const products = await this.internshipRepo
      .createQueryBuilder()
      .orderBy('created_at', 'DESC')
      .offset(skippedItems)
      .andHaving('isActive = :isActive', { isActive: true })
      .limit(paginationDto.limit)
      .getMany();

    return {
      totalCount,
      page: paginationDto.page,
      limit: paginationDto.limit,
      data: products,
    };
  }

  /**
   * get All the internship
   */
  async getAllInternships(): Promise<Internship[]> {
    return await this.internshipRepo.find();
  }

  /**
   * gel internship by ID
   */
  async getInternshipById(id: string): Promise<Internship> {
    return await this.internshipRepo.findOne(id);
  }

  /**
   * Update the internship
   */
  async updateInternship(
    token: string,
    id: string,
    data: Partial<Internship>,
  ): Promise<{ success: boolean; message: string }> {
    let payload: any;
    try {
      payload = this.jwtService.verify(token.split(' ')[1]);
    } catch (err) {
      throw new Error('Invalid token');
    }

    if (data.isActive === false || data.isActive === true) {
      throw new Error('Actice state is not changed from this route');
    }

    const internship = await this.internshipRepo.findOne(id);
    const user = await this.userService.getUserById(payload.userId);

    try {
      if (!user.isActive) {
        throw new Error('Inactive user');
      }

      if (user.userType === 'recruiter' || user.roles.includes('admin')) {
        if (id === internship.id) {
          await this.internshipRepo.update(id, data);
          return { success: true, message: 'Internship updated successfully' };
        } else {
          throw new Error('Invalid Credientials');
        }
      }

      throw new HttpException(
        'You are not authorized to create an internship',
        HttpStatus.UNAUTHORIZED,
      );
    } catch (error) {
      throw error;
    }
  }

  /**
   * Activate Internship
   */
  async activateInternship(
    id: string,
  ): Promise<{ success: boolean; message: string }> {
    const internship = await this.internshipRepo.findOne(id);
    internship.isActive = true;
    await this.internshipRepo.save(internship);
    return { success: true, message: 'Internship activated successfully' };
  }
}
