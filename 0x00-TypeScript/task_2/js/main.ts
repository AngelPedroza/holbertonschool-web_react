interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

class Director implements DirectorInterface {

    workFromHome(): string { return "Working from home"; }

    getCoffeeBreak(): string { return "Getting a coffee break"; }

    workDirectorTasks(): string { return "Getting to director tasks"; }
}

class Teacher implements TeacherInterface {

    workFromHome(): string { return "Cannot work from home"; }

    getCoffeeBreak(): string { return "Cannot have a break"; }

    workDirectorTasks(): string { return "Getting to work"; }
}

const createEmployee = function (salary: number | string): Teacher | Director {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

console.log(createEmployee(200));
// Teacher
console.log(createEmployee(1000));
// Director
console.log(createEmployee('$500'));
// Director