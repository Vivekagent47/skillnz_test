import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus } from '@nestjs/common';

import { AuthController } from '../auth.controller';
import { AuthService } from '../auth.service';

import { CreateUserDto } from '../../user';
import { LoginCredential } from '../dto/login-credential.dto';

describe('Auth Controller', () => {
  let controller: AuthController;

  /**
   * Prepare mock data set
   */
  const mockUserData: CreateUserDto = {
    firstName: 'Joe',
    lastName: 'Joe',
    email: 'joe@example.com',
    password: '123456',
    mobileNumber: 9876543210,
    countryCode: '+91',
    userType: 'student',
  };

  const mockCredential: LoginCredential = {
    email: mockUserData.email,
    password: mockUserData.password,
  };

  const mockUser = {
    id: 1,
    ...mockUserData,
  };

  const mockToken = {
    accessToken: 'bla bla',
  };

  const mockAuthService = {
    registerUser: () => {
      return Promise.resolve(mockUser);
    },

    login: () => {
      return Promise.resolve(mockToken);
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    })
      .overrideProvider(AuthService)
      .useValue(mockAuthService)
      .compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Register user', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('Should call registerUser service with right parameters', async () => {
      jest.spyOn(mockAuthService, 'registerUser');
      const user = await controller.register(mockUserData);
      expect(mockAuthService.registerUser).toBeCalledWith(mockUserData);
      expect(user).toEqual(mockUser);
    });

    it('Should handle service layer exception', async () => {
      jest.spyOn(mockAuthService, 'registerUser').mockImplementation(() => {
        throw new Error('Test error');
      });

      try {
        await controller.register(mockUserData);
        expect(true).toBeFalsy();
      } catch (error) {
        expect(error.message).toBe('Test error');
        expect(error.status).toBe(HttpStatus.BAD_REQUEST);
      }
    });
  });

  describe('Login user', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('Should call login service with right parameters', async () => {
      jest.spyOn(mockAuthService, 'login');
      const response = await controller.login(mockCredential);
      expect(mockAuthService.login).toBeCalledWith(mockCredential);
      expect(response).toEqual(mockToken);
    });

    it('Should handle service layer exception', async () => {
      jest.spyOn(mockAuthService, 'login').mockImplementation(() => {
        throw new Error('Test error');
      });

      try {
        await controller.login(mockCredential);
        expect(true).toBeFalsy();
      } catch (error) {
        expect(error.message).toBe('Test error');
        expect(error.status).toBe(HttpStatus.BAD_REQUEST);
      }
    });
  });
});
