let filter = function (array, callback) {
	for (let i = 0; i < array.length; i++) {
		array[i] = callback(array[i]);
	}

	return array;
};

// var result = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function (num) {
// 	if (num % 2 == 0) return num;
// });

// console.log(result);

var result = filter([-3, -1, 1, 3, -5, 15, -20], function (num) {
	if (num > 0) return num;
});
console.log(result);
