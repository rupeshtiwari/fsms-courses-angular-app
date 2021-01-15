export interface Course {
  id: string;
  title: string;
  details: string;
  percentComplete: number;
  approved?: boolean;
  studentId: string | null;
  createDate?: Date;
}
