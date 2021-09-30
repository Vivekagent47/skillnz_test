import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./users.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(":id")
  show(@Param("id") id: string) {
    return this.usersService.showById(+id);
  }

  @Get()
  showAll() {
    return this.usersService.findAll();
  }
}
