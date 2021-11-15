export type Category =
  | 'engineering'
  | 'commerce'
  | 'management'
  | 'science'
  | 'arts'
  | 'medical'
  | 'law'
  | 'humanities'
  | 'other';

export type AnsType = 'number' | 'string';

export type Question = {
  id: number;
  question: string;
  ansType: AnsType;
};

export type InternshipType = 'workfromhome' | 'onsite';

export interface IInternship {
  /**
   * Primary key id
   */
  id: string;

  /**
   * activation status
   */
  isActive: boolean;

  /**
   * Job name like UI/UX Designer
   */
  jobName: string;

  /**
   * Company Name like Skillz
   */
  companyName: string;

  /**
   * Website Link of company
   */
  companyUrl: string;

  /**
   * About the company
   */
  aboutCompany: string;

  /**
   * Job Description or about the role of internship/job
   */
  jobDescription: string;

  /**
   * Array of skills in string like ["reactjs", "vuejs"]
   */
  skills: string[];

  compensation: boolean;

  /**
   * Min value of stipen
   */
  minStipen: number;

  /**
   * Max value of stipen
   */
  maxStipen: number;

  /**
   * Currency type of stipen
   */
  currencyType: string;

  /**
   * No of opening for the positionn
   */
  noOfOpening: number;

  /**
   * Work for Home or if Office work then place name
   */
  internshipType: InternshipType;

  location: string;

  /**
   * Internship period only in months
   */
  internshipPeriod: number;

  /**
   * Statring date of job/internship
   */
  startDate: Date;

  /**
   * Last date of applying
   */
  applyBy: Date;

  /**
   * Responsibilities of role
   */
  responsibilities: string[];

  /**
   * Who is eligible for the position
   */
  perks: string[];

  /**
   * Category of the internship
   * @example engineering, commerce, management, science, arts, medical, law, humanities, other
   */
  category: Category;

  questions: Question[];

  interview: boolean;

  prePlacementOffer: boolean;
}
