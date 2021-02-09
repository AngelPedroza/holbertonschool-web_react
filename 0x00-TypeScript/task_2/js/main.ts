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

    workFromHome() { return "Working from home"; }

    getToWork() { return "Getting a coffee break"; }

    workDirectorTasks() { return "Getting to director tasks"; }
}

class Teacher implements DirectorInterface {

    workFromHome() { return "Cannot work from home"; }

    getCoffeeBreak() { return "Cannot have a break"; }

    workDirectorTasks() { return "Getting to work"; }
}

const createEmployee = function (salary: number | string) {
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