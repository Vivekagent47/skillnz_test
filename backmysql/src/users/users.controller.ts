import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private service: UsersService) {}

  @Get()
  getUsers() {
    return this.service.getUsers();
  }

  @Get(":id")
  getUser(@Param() param) {
    return this.service.getUser(param.id);
  }

  @Post()
  create(@Body() user: UserEntity) {
    return this.service.createUser(user);
  }

  @Delete(":id")
  deleteUser(@Param() param) {
    return this.service.deleteuser(param.id);
  }
}
