// Create Student and Teacher classes
// Student
// learn() -> prints the student is learning something new
// question(teacher) -> calls the teachers answer method
// Teacher
// teach(student) -> calls the students learn method
// answer() -> prints the teacher is answering a question
// Instantiate a Student and Teacher object
// Call the student's question() method and the teacher's teach() method

class Student {
  learn(): void {
    console.log('Student learns something new');
  }

  question(teacherInput: Teacher): void {
    teacherInput.answer();
  }
}

class Teacher {
  teach(studentInput: Student): void {
    studentInput.learn();
  }

  answer(): void {
    console.log('Teacher answers the question');
  }
}

let studentInput = new Student();
let teacherInput = new Teacher();
studentInput.question(teacherInput);
