import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';

/**
 * User service
 */
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * create user
   */
  async createUser(userData: CreateUserDto): Promise<User> {
    const user = new User();
    user.firstName = userData.firstName;
    user.lastName = userData.lastName;
    user.email = userData.email;
    user.roles = ['user'];
    user.isActive = true;
    user.userType = userData.userType;
    user.mobileNumber = userData.mobileNumber ? userData.mobileNumber : 0;
    user.countryCode = userData.countryCode ? userData.countryCode : '';
    user.password = await this.hashPassword(userData.password);

    try {
      return this.userRepository.save(user);
    } catch (error) {
      // process email duplicate err msg
      if (error.code === 'ER_DUP_ENTRY') {
        throw new Error(`user already exists with email ${user.email}`);
      }

      throw error;
    }
  }

  /**
   * get user by id
   */
  getUserById(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  /**
   * get user by email
   */
  getUserByEmail(email): Promise<User> {
    return this.userRepository.findOne({ email });
  }

  getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  /**
   * encrypt password
   */
  hashPassword(password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          return reject(null);
        }

        bcrypt.hash(password, salt, (err2, hash) => {
          return err2 ? reject(null) : resolve(hash);
        });
      });
    });
  }

  /**
   * compare user password hash
   */
  checkPassword(user: User, password: string): Promise<boolean> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (error, ok) => {
        return error || !ok ? resolve(false) : resolve(true);
      });
    });
  }

  /**
   * Update user
   */
  async updateUser(id: string, data: Partial<any>) {
    const user = await this.getUserById(id);

    if (data.password || data.roles) {
      throw new Error('Password or roles is not changed from this route');
    }

    if (!user) {
      throw new Error('Invalid credentials');
    }

    await this.userRepository.update(id, data);

    const newUser = await this.userRepository.findOne({ id });
    delete newUser.password;
    return newUser;
  }

  /**
   * Update Password
   */
  async updatePassword(id: string, data: UpdatePasswordDto) {
    const user = await this.getUserByEmail(data.email);

    if (!user) {
      throw new Error('Invalid credentials');
    }

    if (id !== user.id) {
      throw new Error('Invalid credentials');
    }

    const isMatched = await this.checkPassword(user, data.prvPassword);

    if (!isMatched) {
      throw new Error('Invalid Old Password');
    }

    const hashNew = await this.hashPassword(data.newPassword);

    try {
      await this.userRepository.update(user.id, { password: hashNew });
      return {
        success: true,
        message: 'Password Changed Successfully',
      };
    } catch {
      throw new Error('Some error');
    }
  }
}
