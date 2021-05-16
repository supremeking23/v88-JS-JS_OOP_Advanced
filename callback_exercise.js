// 1Create a function that takes another function as its argument.  Have the function execute the passed function.
// function call(callback) {
// 	callback();
// }

// function call_name(name = "Sayu") {
// 	console.log(`her name is ${name}`);
// }

// call(call_name);

// 2. Create a function that returns a function.  Have the returned function be executed.
function call(callback) {
	let name = callback();
	console.log(name);
	// console.log(typeof callback());
}

function call_name(name = "Sayu") {
	return `her name is ${name}`;
}

call(call_name);

// 3 Create a function that takes two functions as its arguments.  Randomly, either execute the first function or the second function
function functionThree(functionOne, functionTwo) {
	let array_of_functions = [functionOne, functionTwo];
	return array_of_functions[Math.floor(Math.random() * array_of_functions.length)]();
}

function functionOne() {
	console.log(`function one`);
}

function functionTwo() {
	console.log(`function two`);
}

functionThree(functionOne, functionTwo);
