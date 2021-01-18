import { Student } from './student';
import { Mentor } from './mentor';

export class cohort {
  name: string;
  students: Student[];
  mentors: Mentor[];

  constructor(name: string) {
    this.name = name;
    this.students = [];
    this.mentors = [];
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  addMentor(mentor: Mentor): void {
    this.mentors.push(mentor);
  }

  info(): void {
    console.log(
      `The ${this.name} cohort has size of ${this.students.length} students and size of ${this.mentors.length} mentors.`
    );
  }
}
