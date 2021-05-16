var _ = {
	map: function (arr, callback) {
		for (let i = 0; i < arr.length; i++) {
			arr[i] = callback(arr[i]);
		}

		return arr;
	},
	reduce: function (arr, callback, memo) {
		let total = 0;
		for (let i = 0; i < arr.length; i++) {
			total = total + arr[i];
		}
		return callback(memo, total);
	},
	find: function (arr, callback) {
		let newVal;
		for (let i = 0; i < arr.length; i++) {
			if (callback(arr[i])) {
				newVal = arr[i];
				return newVal;
			}
		}

		// return newVal;
	},
	filter: function (arr, callback) {
		let newArr = [];
		for (let i = 0; i < arr.length; i++) {
			// arr[i] = callback(arr[i]);
			if (callback(arr[i])) {
				newArr.push(arr[i]);
			}
		}

		return newArr;
	},
};

// you just created a library with 5 methods!

// var map_result = _.map([1, 2, 3], function (num) {
// 	return num * 3;
// }); //should return [3,6,9]

var reduceOne = _.reduce(
	[1, 2, 3],
	function (memo, num) {
		return memo + num;
	},
	0
); // should return 6
// _.reduce(
// 	[1, 2, 3],
// 	function (memo, num) {
// 		return memo + num;
// 	},
// 	5
// ); //should return 11
// _.reduce(
// 	[1, 2, 3],
// 	function (memo, num) {
// 		return memo * num;
// 	},
// 	2
// ); //should return 12

// var find_result = _.find([1, 2, 3, 4, 5, 6], function (num) {
// 	return num % 2 == 0;
// }); // should return 2

// var filter_result = _.filter([1, 2, 3, 4, 5, 6], function (num) {
// 	return num % 2 == 0;
// }); // should return [2,4,6]

// console.log(map_result);
// console.log(find_result);
// console.log(filter_result);

console.log(reduceOne);
