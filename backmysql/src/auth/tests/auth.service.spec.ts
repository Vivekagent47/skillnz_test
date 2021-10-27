import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../auth.service';
import { CreateUserDto, UserService } from '../../user';
import { LoginCredential } from '../dto/login-credential.dto';
// import { RefreshTokenDto } from '../refresh-token.dto';

describe('AuthService', () => {
  let service: AuthService;

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

  // const mockRefreshToken: RefreshTokenDto = {
  //   refreshToken: 'bla bla',
  // };

  const mockUser = {
    id: 1,
    isActive: true,
    roles: ['user'],
    ...mockUserData,
  };

  const mockToken = {
    accessToken: 'bla bla',
  };

  const mockUserService = {
    createUser: () => Promise.resolve(mockUser),
    getUserByEmail: () => Promise.resolve(mockUser),
    checkPassword: () => Promise.resolve(true),
    // refreshToken: () => Promise.resolve(mockRefreshToken),
  };

  const mockJwtService = {
    sign: () => mockToken.accessToken,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UserService,
          useValue: mockUserService,
        },
        {
          provide: JwtService,
          useValue: mockJwtService,
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Register user', () => {
    it('should call user service createUser', async () => {
      jest.spyOn(mockUserService, 'createUser');
      const user = await service.registerUser(mockUserData);

      expect(mockUserService.createUser).toBeCalledWith(mockUserData);
      expect(user).toEqual(mockUser);
    });
  });

  describe('Login user', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('should call user service getUserByEmail, checkPassword', async () => {
      jest.spyOn(mockUserService, 'getUserByEmail');
      jest.spyOn(mockUserService, 'checkPassword');

      await service.login(mockCredential);

      expect(mockUserService.getUserByEmail).toBeCalledWith(
        mockCredential.email,
      );
      expect(mockUserService.checkPassword).toBeCalledWith(
        mockUser,
        mockCredential.password,
      );
    });

    it('should throw error when user not found', async () => {
      jest
        .spyOn(mockUserService, 'getUserByEmail')
        .mockImplementation(() => Promise.resolve(undefined));

      try {
        await service.login(mockCredential);
        expect(true).toBeFalsy();
      } catch (error) {
        expect(error.message).toBe('Invalid credentials');
        // expect(error.status).toBe(HttpStatus.UNAUTHORIZED);
      }
    });

    it('should throw error when password mismatch', async () => {
      jest
        .spyOn(mockUserService, 'checkPassword')
        .mockImplementation(() => Promise.resolve(false));

      try {
        await service.login(mockCredential);
        expect(true).toBeFalsy();
      } catch (error) {
        expect(error.message).toBe('Invalid credentials');
        // expect(error.status).toBe(HttpStatus.UNAUTHORIZED);
      }
    });

    it('should throw error when user is inactive', async () => {
      jest.spyOn(mockUserService, 'getUserByEmail').mockImplementation(() =>
        Promise.resolve({
          ...mockUser,
          isActive: false,
        }),
      );

      try {
        await service.login(mockCredential);
        expect(true).toBeFalsy();
      } catch (error) {
        expect(error.message).toBe('Inactive user');
        // expect(error.status).toBe(HttpStatus.UNAUTHORIZED);
      }
    });

    it('should call jwt sign with right params', async () => {
      jest.spyOn(mockJwtService, 'sign');
      await service.login(mockCredential);

      expect(mockJwtService.sign).toHaveBeenCalledWith(
        expect.objectContaining({
          email: mockUser.email,
          roles: mockUser.roles,
          userId: mockUser.id,
        }),
      );
    });
  });

  // describe('Refresh Token', () => {
  //   it('give new access token with prv refresh token', async () => {
  //     jest.spyOn(mockUserService, 'refreshToken');
  //     const user = await service.refreshToken(mockRefreshToken);

  //     expect(mockUserService.refreshToken).toBeCalledWith(mockRefreshToken);
  //     expect(user).toEqual(mockToken);
  //   });
  // });
});
