Project Overview

This project introduces the TypeScript language, focusing on building interfaces, classes, and complex type definitions while using tools like Webpack, ESLint, and Jest.
You’ll learn how to compile, organize, and manage TypeScript code in a professional frontend environment.

Learning Objectives

By the end of this project, you should be able to:

Understand the basics of TypeScript and its benefits over JavaScript

Create and extend interfaces and classes

Use advanced TypeScript features like namespaces, declaration merging, and literal types

Set up Webpack for project compilation

Configure ESLint to enforce coding standards

Write strongly-typed and error-free code

Project Requirements

Allowed editors: vi, vim, emacs, Visual Studio Code

All files must end with a new line

All files will be transpiled on Ubuntu 18.04 LTS

TypeScript scripts will be checked with Jest (version 24.9.*)

A README.md file is mandatory at the root of the project

The TypeScript compiler should not show any warning or error

Your code should use the .ts extension when possible

Every file should be properly typed

Repository Information

GitHub repository: alx-frontend-javascript

Directory: 0x04-TypeScript

Project Tasks
0. Creating an interface for a student

Directory: task_0/

Files:

js/main.ts

package.json

.eslintrc.js

tsconfig.json

webpack.config.js

Requirements:

Define an interface Student with:

firstName: string

lastName: string

age: number

location: string

Create two student objects and store them in an array studentsList.

Using Vanilla JavaScript, render a table displaying each student’s first name and location.

Note: Webpack should return No type errors found.

1. Let’s build a Teacher interface

Directory: task_1/

Files:

js/main.ts, webpack.config.js, tsconfig.json, package.json

Requirements:

Create an interface Teacher with:

firstName (string) and lastName (string): read-only

fullTimeEmployee (boolean): always defined

yearsOfExperience? (number): optional

location (string): always defined

Allow additional properties (e.g., contract: boolean).

2. Extending the Teacher class

Extend Teacher with a Directors interface that adds:

numberOfReports (number)

Example:

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

3. Printing teachers

Create a function printTeacher(firstName, lastName) that returns:

J. Doe


Define an interface printTeacherFunction describing the function signature.

4. Writing a class

Create a class StudentClass with:

firstName and lastName in the constructor

Method workOnHomework() returning "Currently working"

Method displayName() returning the firstName

Use interfaces to describe both the class and its constructor.

5. Advanced Types Part 1

Create interfaces:

DirectorInterface: with workFromHome, getCoffeeBreak, workDirectorTasks

TeacherInterface: with workFromHome, getCoffeeBreak, workTeacherTasks

Create classes Director and Teacher implementing these interfaces.

Implement createEmployee(salary) returning:

A Teacher if salary < 500

A Director otherwise

6. Creating functions specific to employees

Create:

isDirector(employee) → returns true if employee is a Director

executeWork(employee) → calls the correct task function depending on the employee type.

7. String literal types

Define a string literal type:

type Subjects = 'Math' | 'History';


Create a function teachClass(todayClass: Subjects) that returns:

"Teaching Math" if todayClass is 'Math'

"Teaching History" if todayClass is 'History'

8. Ambient Namespaces

Directory: task_3/

Files:

js/main.ts

js/interface.ts

js/crud.d.ts

Requirements:

Create:

type RowID = number

interface RowElement { firstName: string; lastName: string; age?: number }

Write ambient declarations in crud.d.ts for the provided crud.js functions.

In main.ts:

Import the types and functions

Use CRUD.insertRow, CRUD.updateRow, and CRUD.deleteRow

Ensure there are no TypeScript errors

9. Namespace & Declaration merging

Directory: task_4/js/subjects/

Files:

Teacher.ts, Subject.ts, Cpp.ts, Java.ts, React.ts

Requirements:

Use namespace Subjects

Add Teacher interface with firstName, lastName

Add Subject class with teacher attribute and setTeacher method

Implement Cpp, Java, React classes extending Subject

Add experience attributes and methods:

getRequirements()

getAvailableTeacher()

10. Update task_4/js/main.ts

Export constants for subjects and teacher.

Log:

C++
Java
React


For each subject:

Set the teacher

Call getRequirements() and getAvailableTeacher()

11. Brand convention & Nominal typing

Directory: task_5/js/

File: main.ts

Requirements:

Define:

interface MajorCredits { credits: number; brand: 'Major' }

interface MinorCredits { credits: number; brand: 'Minor' }

Define functions:

sumMajorCredits(subject1, subject2)

sumMinorCredits(subject1, subject2)

Compilation & Testing

To compile and test your code:

npm install
npm run build
npm run test


Ensure no TypeScript warnings or errors appear.

Author

Nkeiruka Iweala
Student at ALX | Software Engineer in training