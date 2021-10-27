/**
 * type user roles
 */
export type UserRole = 'user' | 'admin';

export type UserType = 'student' | 'recruiter';

/**
 * Auth user interface
 */
export interface IAuthUser {
  /**
   * usre id
   */
  id: number;

  /**
   * user email
   */
  email: string;

  /**
   * optional user name
   */
  firstName: string;
  lastName: string;

  /**
   * user roles array
   */
  roles: [UserRole];

  /**
   * type of user student or recuiter
   */
  userType: UserType;

  /**
   * mobile number and country code
   */
  mobileNumber?: number;
  countryCode?: string;
}
