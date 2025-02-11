//complete this code
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set age(age) {
        this._age = age;
    }

    get age() {
        return this._age;
    }
}

class Student extends Person {
    constructor(name, age) {
        super(name, age);
    }

    study() {
        console.log(${this.name} is studying);
    }
}

class Teacher extends Person {
    constructor(name, age) {
        super(name, age);
    }

    teach() {
        console.log(${this.name} is teaching);
    }
}

document.getElementById('create-person-button').addEventListener('click', function() {
    const person = new Person('John Doe', 30);
    console.log(person.name);
    person.age = 31;
    console.log(person.age);
});

document.getElementById('create-student-button').addEventListener('click', function() {
    const student = new Student('Jane Doe', 20);
    student.study();
});

document.getElementById('create-teacher-button').addEventListener('click', function() {
    const teacher = new Teacher('Bob Smith', 40);
    teacher.teach();
});