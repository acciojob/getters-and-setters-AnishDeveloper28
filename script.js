    <script>
        class Person {
            constructor(name, age) {
                this._name = name;
                this._age = age;
            }

            get name() {
                return this._name;
            }

            get age() {
                return this._age;
            }

            set age(newAge) {
                if (newAge > 0) {
                    this._age = newAge;
                } else {
                    console.error("Age must be a positive number");
                }
            }
        }

        class Student extends Person {
            study() {
                console.log(`${this.name} is studying`);
            }
        }

        class Teacher extends Person {
            teach() {
                console.log(`${this.name} is teaching`);
            }
        }

        // Test Cases
        const person = new Person("John", 25);
        console.log(person.name);  // Output: John
        person.age = 30;
        console.log(person.age);  // Output: 30

        const student = new Student("Alice", 22);
        student.study();  // Output: Alice is studying

        const teacher = new Teacher("Bob", 40);
        teacher.teach();  // Output: Bob is teaching
    </script>