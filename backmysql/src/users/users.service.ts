import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async getUsers(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async getUser(_id: number): Promise<UserEntity[]> {
    return await this.userRepository.find({
      select: ["id", "firstName", "lastName", "userType"],
      where: [{ id: _id }],
    });
  }

  async createUser(user: UserEntity): Promise<any> {
    const res = this.userRepository.save(user);
    return res;
  }

  async deleteuser(_id: number): Promise<any> {
    this.userRepository.delete(_id);
    return {
      result: "user deleted successfully",
    };
  }
}
