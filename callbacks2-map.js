function map(array, callback) {
	for (let i = 0; i < array.length; i++) {
		array[i] = callback(array[i]);
	}

	return array;
}

// var result = map([1, 2, 3, 4, 5, 6, 7], function (num) {
// 	return num * 2;
// });

var result = map([-3, -1, 1, 3, -5, 15, -20], function (num) {
	return num + 5;
});

console.log(result);
