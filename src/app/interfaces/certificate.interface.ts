import { Student } from './student.interface';

export interface Certificate {
  id: string;
  category: string;
  hours: number;
  student: Student;
  isValidated: boolean
}
