import { Person } from './Person';

export class Mentor {
  name: string;
  age: number;
  gender: string;
  level: string;

  constructor(
    name: string = 'Jane Doe',
    age: number = 30,
    gender: string = 'female',
    level: string = 'intermediate'
  ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;
  }

  getGoal(): void {
    console.log('My goal is: Educate brilliant junior software developers.');
  }

  introduce(): void {
    console.log(
      `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor`
    );
  }
}
