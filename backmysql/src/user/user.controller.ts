import {
  Get,
  Param,
  UseGuards,
  Controller,
  HttpStatus,
  HttpException,
  UseInterceptors,
  ClassSerializerInterceptor,
} from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";

import { User } from "./user.entity";
import { UserService } from "./user.service";
import { RolesGuard, Roles } from "../utils";

/**
 * User controller
 */
@Controller("user")
export class UserController {
  constructor(private readonly service: UserService) {}

  /**
   * logged in user's profile
   */
  @Get("/:id")
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles("user", "admin")
  @UseInterceptors(ClassSerializerInterceptor)
  async getMe(@Param() userID: number): Promise<User> {
    try {
      return await this.service.getUserById(userID);
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
  @Roles("admin")
  @UseInterceptors(ClassSerializerInterceptor)
  async getAllUser(): Promise<User[]> {
    try {
      return await this.service.getAllUsers();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
