interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

const director1: Directors = {
  firstName: 'Jane',
  lastName: 'Smith',
  location: 'New York',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

console.log(printTeacher({ firstName: 'John', lastName: 'Doe' }));
