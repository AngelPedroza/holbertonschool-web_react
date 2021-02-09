interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
    workFromHome(): string {
        console.log("Working from home");
        return "Working from home";
    }

    getCoffeeBreak(): string {
        console.log("Getting a coffee break");
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        console.log("Getting to director tasks");
        return "Getting to director tasks";
    }
}

export class Teacher implements TeacherInterface {
    workFromHome(): string {return "Cannot work from home";}
    getCoffeeBreak(): string {return "Cannot have a break";}
    workTeacherTasks(): string {return "Getting to work";}
}

export function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === "number" && salary < 500) return new Teacher();

    return new Director();
}

console.log(createEmployee(200));
// Teacher
console.log(createEmployee(1000));
// Director
console.log(createEmployee('$500'));
// Director