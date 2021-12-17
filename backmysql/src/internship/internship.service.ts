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
import { ApplyInternshipDto } from './dto/apply-internship.dto';
import { ApplyInternship } from './applyinternship.entity';

/**
 * Internship Service
 */
@Injectable()
export class InternshipService {
  constructor(
    @InjectRepository(Internship)
    private readonly internshipRepo: Repository<Internship>,

    @InjectRepository(ApplyInternship)
    private readonly applyInternshipRepo: Repository<ApplyInternship>,

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
    internship.applicant = [];
    internship.numberOfApplicants = 0;
    internship.questions = this.jsonToString([
      {
        id: 1,
        question:
          'How many years of work experience do you have using Figma/sketch software ? ',
        ansType: 'number',
      },
      {
        id: 2,
        question:
          'Rate your self in figma tool skill out of 5? Where 5 being highest?',
        ansType: 'number',
      },
      {
        id: 3,
        question: 'Add the link to your design portfolio?',
        ansType: 'string',
      },
      {
        id: 4,
        question: 'Why do you think you are suitable for this role?',
        ansType: 'string',
      },
    ]);

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
        if (user.roles.includes('admin')) {
          internship.isActive = true;
        } else if (user.userType === 'recruiter') {
          internship.isActive = false;
        }

        const temp = await this.internshipRepo.save(internship);
        temp.questions = JSON.parse(temp.questions);
        delete temp.applicant;

        if (user.roles.includes('admin')) {
          try {
            await this.userService.createInternship(data.recuiterId, temp.id);
          } catch (err) {
            throw new Error(err);
          }
        } else if (user.userType === 'recruiter') {
          try {
            await this.userService.createInternship(user.id, temp.id);
          } catch (err) {
            throw new Error(err);
          }
        }
        return temp;
      }

      throw new HttpException(
        'You are not authorized to create an internship',
        HttpStatus.UNAUTHORIZED,
      );
    } catch (error) {
      throw error;
    }
  }

  jsonToString(json_arr: any[]): string {
    let jsonArr_string = '[';
    for (let i = 0; i < json_arr.length; i++) {
      jsonArr_string += JSON.stringify(json_arr[i]);
      if (i < json_arr.length - 1) {
        jsonArr_string += ',';
      }
    }
    jsonArr_string += ']';

    return jsonArr_string;
  }

  /**
   * gel paginated internship list
   */
  async getInternships(
    paginationDto: PaginationDto,
    token: string,
  ): Promise<PaginatedResultDto> {
    const skippedItems = (paginationDto.page - 1) * paginationDto.limit;

    const totalCount = await this.internshipRepo.count({
      where: { isActive: true },
    });
    const totalPages = Math.ceil(totalCount / paginationDto.limit);
    const nextPage =
      paginationDto.page + 1 <= totalPages
        ? paginationDto.page + 1
        : totalPages;
    const prevPage = paginationDto.page - 1 >= 1 ? paginationDto.page - 1 : 1;

    let payload: any, user: any;
    if (token) {
      try {
        payload = await this.jwtService.verify(token.split(' ')[1]);
        user = await this.userService.getUserById(payload.userId);
      } catch (err) {
        throw new Error('Invalid token');
      }
    }

    const data = await this.internshipRepo
      .createQueryBuilder()
      .orderBy('createdAt', 'DESC')
      .offset(skippedItems)
      .andHaving('isActive = :isActive', { isActive: true })
      .limit(paginationDto.limit)
      .getMany();

    for (let i = 0; i < data.length; i++) {
      data[i].questions = JSON.parse(data[i].questions);
      data[i].numberOfApplicants = data[i].applicant.length;
      if (!token) {
        delete data[i].applicant;
      } else if (user.userType === 'student') {
        delete data[i].applicant;
      }
    }

    return {
      totalCount,
      totalPages,
      nextPage,
      prevPage,
      currPage: paginationDto.page,
      limit: paginationDto.limit,
      data: data,
    };
  }

  /**
   * get all active internship
   */
  async getInternshipByAllActive(token: string): Promise<Internship[]> {
    let payload: any, user: any;
    if (token) {
      try {
        payload = await this.jwtService.verify(token.split(' ')[1]);
        user = await this.userService.getUserById(payload.userId);
      } catch (err) {
        throw new Error('Invalid token');
      }
    }

    const data = await this.internshipRepo
      .createQueryBuilder()
      .orderBy('createdAt', 'DESC')
      .andHaving('isActive = :isActive', { isActive: true })
      .getMany();

    for (let i = 0; i < data.length; i++) {
      data[i].questions = JSON.parse(data[i].questions);
      data[i].numberOfApplicants = data[i].applicant.length;
      if (!token) {
        delete data[i].applicant;
      } else if (user.userType === 'student') {
        delete data[i].applicant;
      }
    }

    return data;
  }

  /**
   * get All the internship
   */
  async getAllInternships(token: string): Promise<Internship[]> {
    let payload: any;
    try {
      payload = this.jwtService.verify(token.split(' ')[1]);
    } catch (err) {
      throw new Error('Invalid token');
    }

    const user = await this.userService.getUserById(payload.userId);

    if (!user) {
      throw new Error('Invalid token');
    }

    if (!user.isActive) {
      throw new Error('User is not active');
    }

    if (user.userType === 'recruiter' || user.roles.includes('admin')) {
      const data = await this.internshipRepo
        .createQueryBuilder()
        .orderBy('createdAt', 'DESC')
        .getMany();

      for (let i = 0; i < data.length; i++) {
        data[i].questions = JSON.parse(data[i].questions);
        data[i].numberOfApplicants = data[i].applicant.length;
      }
      return data;
    } else {
      throw new HttpException(
        'You are not authorized to view all internship',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  /**
   * gel internship by ID
   */
  async getInternshipById(token: string, id: string): Promise<Internship> {
    let payload: any, user: any;
    if (token) {
      try {
        payload = await this.jwtService.verify(token.split(' ')[1]);
        user = await this.userService.getUserById(payload.userId);
      } catch (err) {
        throw new Error('Invalid token');
      }
    }

    const data = await this.internshipRepo.findOne(id);
    data.questions = JSON.parse(data.questions);
    data.numberOfApplicants = data.applicant.length;
    if (!token) {
      delete data.applicant;
    } else if (user.userType === 'student') {
      delete data.applicant;
    }
    return data;
  }

  /**
   * Update the internship
   */
  async updateInternship(
    token: string,
    id: string,
    data: CreateInternshipDto,
  ): Promise<{ success: boolean; message: string }> {
    let payload: any;
    try {
      payload = this.jwtService.verify(token.split(' ')[1]);
    } catch (err) {
      throw new Error('Invalid token');
    }

    const internship = await this.internshipRepo.findOne(id);
    const user = await this.userService.getUserById(payload.userId);

    try {
      if (!user.isActive) {
        throw new Error('Inactive user');
      }

      if (user.userType === 'recruiter' || user.roles.includes('admin')) {
        internship.jobName = data.jobName;
        internship.companyName = data.companyName;
        internship.companyUrl = data.companyUrl ? data.companyUrl : '';
        internship.aboutCompany = data.aboutCompany ? data.aboutCompany : '';
        internship.jobDescription = data.jobDescription
          ? data.jobDescription
          : '';
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

        await this.internshipRepo.save(internship);

        return { success: true, message: 'Internship updated successfully' };
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
    await this.internshipRepo.update(id, { isActive: true });
    return { success: true, message: 'Internship activated successfully' };
  }

  /**
   * Deactive Internship
   */
  async deactivateInternship(
    id: string,
    token: string,
  ): Promise<{ success: boolean; message: string }> {
    let payload: any;
    try {
      payload = this.jwtService.verify(token.split(' ')[1]);
    } catch (err) {
      throw new Error('Invalid token');
    }

    const user = await this.userService.getUserById(payload.userId);

    if (!user.isActive) {
      throw new Error('Inactive user');
    }

    if (user.userType === 'recruiter' || user.roles.includes('admin')) {
      await this.internshipRepo.update(id, { isActive: false });
      return { success: true, message: 'Internship deactivated successfully' };
    } else {
      throw new HttpException(
        'You are not authorized to deactivate an internship',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  /**
   * Apply Internship
   */
  async applyInternship(
    token: string,
    id: string,
    data: ApplyInternshipDto,
  ): Promise<any> {
    let payload: any;
    try {
      payload = this.jwtService.verify(token.split(' ')[1]);
    } catch (err) {
      throw new Error('Invalid token');
    }

    const internship = await this.internshipRepo.findOne(id);
    const user = await this.userService.getUserById(payload.userId);

    try {
      if (!user.isActive) {
        throw new Error('Inactive user');
      }

      for (let i = 0; i < internship.applicant.length; i++) {
        const applicant = await this.applyInternshipRepo.findOne(
          internship.applicant[i],
        );
        if (applicant.userId === payload.userId) {
          throw new Error('You have already applied for this internship');
        }
      }

      if (user.userType === 'student') {
        const newApplication = new ApplyInternship();
        newApplication.userId = payload.userId;
        newApplication.answers = this.jsonToString(data.answers);

        const applyData = await this.applyInternshipRepo.save(newApplication);

        internship.applicant.push(applyData.id);
        await this.internshipRepo.save(internship);

        return {
          success: true,
          message: 'Application submitted successfully',
        };
      }

      throw new HttpException(
        'You are not authorized to apply an internship',
        HttpStatus.UNAUTHORIZED,
      );
    } catch (error) {
      throw error;
    }
  }
}
