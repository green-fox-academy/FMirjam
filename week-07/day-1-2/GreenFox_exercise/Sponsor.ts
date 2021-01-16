import { Person } from './Person';

export class Sponsor {
  name: string;
  age: number;
  gender: string;
  hiredStudents: number;
  company: string;
  constructor(
    name: string = 'Jane Doe',
    age: number = 30,
    gender: string = 'female',
    company: string = 'Google',
    hiredStudents: number = 0,
  ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.hiredStudents = hiredStudents;
    this.company = company;
  }

  introduce(): void {
    console.log(
      `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`
    );
  }

  hire(): number {
    return this.hiredStudents++;
  }

  getGoal(): void {
    console.log('My goal is: Hire brilliant junior software developers.');
  }
}
