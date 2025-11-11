interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Director extends Teacher {
  numberOfReports: number;
}

// Interface for the printTeacher function
interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

// Implementation of printTeacher using the interface
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
};

// Teacher
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Director
const director1: Director = {
  firstName: 'Jane',
  lastName: 'Smith',
  location: 'New York',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// usage of printTeacher function
console.log(printTeacher({ firstName: 'John', lastName: 'Doe' })); 

