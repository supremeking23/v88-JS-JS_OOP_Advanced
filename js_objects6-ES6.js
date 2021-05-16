class Student {
	// Enter code below
	constructor(name) {
		this._name = name;
		this._hp = 10;
		this._int = 10;
	}

	study() {
		this._hp -= 1;
		this._int += 1;
	}

	report() {
		console.log(`${this._name} has hp of ${this._hp} and int of ${this._int}`);
	}
}

let student1 = new Student("Marcus");
let student2 = new Student("John");

student1.study(); //decrease hp by 1 and increase int by 1
student1.study(); //decrease hp by 1 and increase int by 1

student1.report(); //have it log 'Marcus has hp of 8 and int of 12'
student2.report(); //have it log 'John has hp of 10 and int of 10'
