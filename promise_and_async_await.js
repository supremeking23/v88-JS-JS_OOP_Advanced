// function emitRandomNmber() {
// 	setInterval(function () {
// 		let number = Math.floor(Math.random() * 5) + 1;
// 		let attempt = 1;
// 		console.log(`attemp # ${attempt}`);
// 		console.log(number);
// 		attempt++;
// 		if (number == 5) {
// 			clearInterval(this);
// 		}
// 	}, 2000);
// }

// emitRandomNmber();

// function abc(callback1, callback2) {
// 	callback1();
// 	callback2();
// }

// abc(
// 	function () {
// 		console.log("calling callback 1");
// 		console.log("calling callback 1.2");
// 	},
// 	function () {
// 		console.log("calling callback 2");
// 	}
// );

const promise = new Promise((resolve, reject) => {
	for (let i = 1; i <= 10; i++) {
		setTimeout(() => {
			// resolve(Math.floor(Math.random()*86);
			resolve(Math.floor(Math.random() * 86));
		}, 2000);
	}
});

promise.then((response) => {
	console.log(response);
});
