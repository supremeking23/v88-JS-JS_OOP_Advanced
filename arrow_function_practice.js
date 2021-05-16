//traditional function
function abc(a) {
	return a + 100;
}
//one way of using an arrow function
(a) => {
	return a + 100;
};
//if the function is simply returning a value, the curly brackets and the return statement is optional
(a) => a + 100;
//the parenthesis is even optional!
(a) => a + 100;

// const hay = (a, b) => {
// 	let x = 10;
// 	return x + a * b;
// };

function hay(a, b) {
	let x = 10;
	return x + a * b;
}

console.log(hay(3, 3));

// const elf = (a = 10, b = 5) => a + b;

function elf(a = 10, b = 15) {
	return a + b;
}

console.log(elf());

var obj = {
	name: "coding",
	b: (word) => {
		console.log(this.name, word);
	},
};
obj.b("is fun");

var check = {
	one: "one",
	two: "two",
	three: function () {
		console.log(this.one);
	},
};

check.three();

// https://stackoverflow.com/questions/31095710/methods-in-es6-objects-using-arrow-functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function abc() {
	sendAjaxRequest(
		"www.cnn.com",
		function (res) {
			//callback instructions with what to do if the ajax request was successful
			console.log(1);
			document.querySelector("h2").innerHTML = "Updated h2 tag!";
			//bunch of other instructions
			console.log(3);
		},
		function (res) {
			//callback instruction on what to do if the ajax request was not successful
			console.log(2);
		}
	);
}

console.log(abc());
