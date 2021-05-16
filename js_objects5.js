let Student = function (name) {
	this.name = name;
	this.hp = 10;
	this.int = 10;
};
// Enter code below
Student.prototype.study = function () {
	this.hp -= 1;
	this.int += 1;
};

Student.prototype.report = function () {
	console.log(`${this.name} has hp of ${this.hp} and int of ${this.int}`);
};

let student1 = new Student("Marcus");
let student2 = new Student("John");

student1.study(); //decrease hp by 1 and increase int by 1
student1.study(); //decrease hp by 1 and increase int by 1

student1.report(); //have it log 'Marcus has hp of 8 and int of 12'
student2.report(); //have it log 'John has hp of 10 and int of 10'
