// let name = "ivan";
// let age = 25;
// (function (names, ages) {
// 	console.log(`hello ${names}, age:${ages}`);
// })(name, age);

// function abc() {
// 	var name = "Michael";
// 	function sayHello() {
// 		console.log(name);
// 	}
// 	return sayHello;
// }
// let result = abc();
// console.log(result); //what would get logged here???
// //
// console.log(result()); //what would get logged now?
let a = (function () {
	return function (a, b) {
		console.log("hello");
		return a * b;
	};
	console.log("world");
})();
console.log(a);
let b = (function () {
	return function (a, b) {
		console.log("hello");
		return a * b;
	};
	console.log("world");
})();
console.log(b());

let c = (function () {
	return function (a, b) {
		console.log("hello");
		return a * b;
	};
	console.log("world");
})();
console.log(c(3, 5));
