// Task 1
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    location: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    [propName: string]: any;
}

// const teacher3: Teacher = {
//     firstName: 'John',
//     fullTimeEmployee: false,
//     lastName: 'Doe',
//     location: 'London',
//     contract: false,
// };
//
// console.log(teacher3);

// Task 2
interface Directors extends Teacher {
    numberOfReports: number;
}

// const director1: Directors = {
//     firstName: 'John',
//     lastName: 'Doe',
//     location: 'London',
//     fullTimeEmployee: true,
//     numberOfReports: 17,
// };
// console.log(director1);

// Task 3
/* eslint-disable @typescript-eslint/class-name-casing */
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

/* eslint-enable @typescript-eslint/class-name-casing */
const printTeacher: printTeacherFunction = function (
    firstName: string,
    lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
}

console.log(printTeacher("John", "Doe")) //-> J. Doe