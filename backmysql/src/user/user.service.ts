import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from './user.entity';
import { Student } from './student.entity';
import { Recruiter } from './recruiter.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { UserRole } from '.';
import { KYC } from './kyc.entity';
import { KycDto } from './dto/kyc.dto';

/**
 * User service
 */
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,

    @InjectRepository(Recruiter)
    private readonly recruiterRepository: Repository<Recruiter>,

    @InjectRepository(KYC)
    private readonly kycRepository: Repository<KYC>,

    private readonly jwtService: JwtService,
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
    user.mobileNumber = userData.mobileNumber ? userData.mobileNumber : '';
    user.countryCode = userData.countryCode ? userData.countryCode : '';
    user.password = await this.hashPassword(userData.password);
    user.profile = '';

    try {
      return this.userRepository.save(user);
    } catch (error) {
      throw error;
    }
  }

  async initialStudentProfile(id: string): Promise<Student> {
    const profile = new Student();
    profile.gender = 'male';
    profile.currentLocation = '';

    try {
      const temp = await this.studentRepository.save(profile);
      await this.userRepository.update(id, { profile: temp.id });
      return temp;
    } catch (error) {
      throw new Error(error);
    }
  }

  async initialRecruiterProfile(id: string): Promise<Recruiter> {
    const profile = new Recruiter();
    profile.gender = 'male';
    profile.currentLocation = '';
    profile.kyc = '';
    profile.postedInternship = [];

    try {
      const temp = await this.recruiterRepository.save(profile);
      await this.userRepository.update(id, { profile: temp.id });
      return temp;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * get user by id
   */
  async getUserById(id: string): Promise<any> {
    const user = await this.userRepository.findOne(id);
    delete user.password;
    let profile = {};
    if (user.profile !== '') {
      profile =
        user.userType === 'student'
          ? await this.studentRepository.findOne({ id: user.profile })
          : await this.recruiterRepository.findOne({ id: user.profile });
    }

    return { ...user, profile };
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
    if (
      data.password ||
      data.roles ||
      data.isActive ||
      data.userType ||
      data.profile
    ) {
      throw new Error(
        'You can not update password, roles, isActive, userType or profile',
      );
    }

    const user = await this.getUserById(id);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    await this.userRepository.update(id, data);

    const newUser = await this.getUserById(id);
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

    if (!user.isActive) {
      throw new Error('User is not active');
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

  async updateRole(id: string, data: { roles: UserRole[] }) {
    const user = await this.getUserById(id);

    if (!user) {
      throw new Error('Invalid credentials');
    }

    if (id !== user.id) {
      throw new Error('Invalid credentials');
    }

    if (!user.isActive) {
      throw new Error('User is not active');
    }

    try {
      await this.userRepository.update(user.id, { roles: data.roles });
      return {
        success: true,
        message: 'Role Changed Successfully',
      };
    } catch (err) {
      throw new Error(err);
    }
  }

  async deleteUser(id: string) {
    try {
      const data = await this.getUserById(id);
      if (data.userType === 'student') {
        await this.studentRepository.delete(data.profile.id);
      } else {
        if (data.profile.kyc !== '') {
          await this.kycRepository.delete(data.profile.kyc);
        }
        await this.recruiterRepository.delete(data.profile.id);
      }
      await this.userRepository.delete(data.id);
      return {
        success: true,
        message: 'User Deleted Successfully',
      };
    } catch (error) {
      throw new Error(error);
    }
  }

  async applyKyc(
    token: string,
    data: KycDto,
  ): Promise<{ success: boolean; message: string }> {
    let payLoad: any;
    try {
      payLoad = await this.jwtService.verify(token.split(' ')[1]);
    } catch (err) {
      throw new Error('Invalid token');
    }

    const { profile, userType } = await this.getUserById(payLoad.userId);

    if (userType !== 'recruiter') {
      throw new Error('Not authorized');
    }

    if (profile.kyc === '' && userType === 'recruiter') {
      const kycData = new KYC();
      kycData.kycStatus = false;
      kycData.companyName = data.companyName;
      kycData.establishmentDate = data.establishmentDate;
      kycData.companySize = data.companySize;
      kycData.headOffice = data.headOffice;
      kycData.branchOffice = data.branchOffice;
      kycData.aboutCompany = data.aboutCompany;
      kycData.socials = this.jsonToString(data.socials);

      try {
        const res = await this.kycRepository.save(kycData);
        console.log(res);
        await this.recruiterRepository.update(profile.id, {
          kyc: res.id,
        });

        return {
          success: true,
          message: 'KYC Applied Successfully',
        };
      } catch (error) {
        throw new Error(error);
      }
    } else {
      throw new Error('Not allowed to apply kyc');
    }
  }

  async createInternship(
    userId: string,
    internshipID: string,
  ): Promise<{ success: boolean; message: string }> {
    try {
      const { profile } = await this.getUserById(userId);
      const recuiter = await this.recruiterRepository.findOne(profile.id);

      if (!recuiter) {
        throw new Error('Invalid credentials');
      }

      recuiter.postedInternship.push(internshipID);
      await this.recruiterRepository.update(recuiter.id, recuiter);

      return {
        success: true,
        message: 'Internship Posted Successfully',
      };
    } catch (error) {
      throw new Error(error);
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

  async verifyKyc(id: string): Promise<{ success: boolean; message: string }> {
    const user = await this.getUserById(id);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    if (user.userType !== 'recruiter') {
      throw new Error('Invalid credentials');
    }

    const kyc = await this.kycRepository.findOne(user.profile.kyc);

    if (!kyc) {
      throw new Error('KYC is not applied');
    }

    try {
      await this.kycRepository.update(kyc.id, { kycStatus: true });
      return {
        success: true,
        message: 'KYC Verified Successfully',
      };
    } catch (error) {
      throw new Error(error);
    }
  }
}
