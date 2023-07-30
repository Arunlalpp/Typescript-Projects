export interface Marks {
  subject: string;
  mark?: number;
}

export interface Student {
  name: string;
  id: string;
  marks: Marks[];
}

export interface StudentsData {
  name: string;
  teacherName: string;
  students: Student[];
}
