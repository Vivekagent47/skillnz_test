import {
  Get,
  Post,
  Body,
  Param,
  Query,
  Headers,
  UseGuards,
  Controller,
  HttpException,
  HttpStatus,
  UseInterceptors,
  ClassSerializerInterceptor,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { Internship } from './internship.entity';
import { RolesGuard, Roles } from '../utils';
import { InternshipService } from './internship.service';
import { PaginationDto } from './dto/pagination.dto';
import { PaginatedResultDto } from './dto/paginatedResult.dto';
import { CreateInternshipDto } from './dto/create-internship.dto';

/**
 * Internship Controller
 */
@Controller('internship')
export class InternshipController {
  constructor(private readonly service: InternshipService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  async getPanginatedInternship(
    @Query() data: PaginationDto,
  ): Promise<PaginatedResultDto> {
    data.page = Number(data.page);
    data.limit = Number(data.limit ? data.limit : 18);

    return await this.service.getInternships({
      ...data,
      limit: data.limit > 18 ? 18 : data.limit,
    });
  }

  @Get('/:id')
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles('user', 'admin')
  @UseInterceptors(ClassSerializerInterceptor)
  async getOneInternship(@Param('id') id: string): Promise<Internship> {
    try {
      return await this.service.getInternshipById(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles('admin', 'user')
  @UseInterceptors(ClassSerializerInterceptor)
  async createInternship(
    @Headers('authorization') token: string,
    @Body() data: CreateInternshipDto,
  ): Promise<Internship> {
    try {
      return await this.service.createInternship(token, data);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Put('/update/:id')
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles('admin', 'user')
  @UseInterceptors(ClassSerializerInterceptor)
  async updateInternship(
    @Headers('authorization') token: string,
    @Param('id') id: string,
    @Body() data: Partial<Internship>,
  ) {
    try {
      return await this.service.updateInternship(token, id, data);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
