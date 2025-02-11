// Person Class
class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    get name(): string {
        return this._name;
	}
    
	set age(age: number) {
        this._age = age;
    }

    // Getter for age (for testing purposes)
    get age(): number {
        return this._age;
    }
}

class Student extends Person {
    study(): void {
        console.log(`${this.name} is studying`);
    }
}

class Teacher extends Person {
    teach(): void {
        console.log(`${this.name} is teaching`);
    }
}
