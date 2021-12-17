import {
  Get,
  Body,
  Put,
  Post,
  Delete,
  Param,
  Headers,
  UseGuards,
  Controller,
  HttpStatus,
  HttpException,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { User } from './user.entity';
import { UserService } from './user.service';
import { RolesGuard, Roles } from '../utils';
// import { UpdatePasswordDto } from './dto/update-password.dto';
import { UserRole } from '.';
import { KycDto } from './dto/kyc.dto';

/**
 * User controller
 */
@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  /**
   * logged in user's profile
   */
  @Get('/:id')
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles('user', 'admin')
  @UseInterceptors(ClassSerializerInterceptor)
  async getMe(@Param('id') id: string): Promise<any> {
    try {
      return await this.service.getUserById(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  /**
   * Get all user list
   */
  @Get()
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles('admin')
  @UseInterceptors(ClassSerializerInterceptor)
  async getAllUser(): Promise<User[]> {
    try {
      return await this.service.getAllUsers();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  // @Put('/update/:id')
  // @ApiBearerAuth()
  // @UseGuards(RolesGuard)
  // @Roles('admin', 'user')
  // @UseInterceptors(ClassSerializerInterceptor)
  // async updateUser(
  //   @Param('id') id: string,
  //   @Body() data: Partial<User>,
  // ): Promise<User> {
  //   try {
  //     return await this.service.updateUser(id, data);
  //   } catch (error) {
  //     throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
  //   }
  // }

  // @Put('/passwordUpdate/:id')
  // @ApiBearerAuth()
  // @UseGuards(RolesGuard)
  // @Roles('user')
  // @UseInterceptors(ClassSerializerInterceptor)
  // async updatePassword(
  //   @Param('id') id: string,
  //   @Body() data: UpdatePasswordDto,
  // ): Promise<any> {
  //   try {
  //     return await this.service.updatePassword(id, data);
  //   } catch (error) {
  //     throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
  //   }
  // }

  @Put('/roleUpdate/:id')
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles('admin')
  @UseInterceptors(ClassSerializerInterceptor)
  async updateRole(
    @Param('id') id: string,
    @Body() data: { roles: UserRole[] },
  ) {
    try {
      return await this.service.updateRole(id, data);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete('/delete/:id')
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles('admin')
  @UseInterceptors(ClassSerializerInterceptor)
  async deleteUser(@Param('id') id: string): Promise<any> {
    try {
      return await this.service.deleteUser(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}

@Controller('recruiter')
export class RecruiterController {
  constructor(private readonly service: UserService) {}

  @Post('/applykyc')
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles('user')
  @UseInterceptors(ClassSerializerInterceptor)
  async applyKyc(
    @Headers('authorization') token: string,
    @Body() data: KycDto,
  ): Promise<{ success: boolean; message: string }> {
    try {
      return await this.service.applyKyc(token, data);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Put('/verifykyc/:id')
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles('admin')
  @UseInterceptors(ClassSerializerInterceptor)
  async verifyKyc(@Param('id') id: string) {
    try {
      return await this.service.verifyKyc(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
