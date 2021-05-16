class Underscore {
	groupBy(arr, callback) {
		let obj = {};
		for (let i = 0; i < arr.length; i++) {
			// arr[i] = callback(arr[i]);
			let id = i + 1;
			obj[id] = [callback(arr[i])];
		}

		return obj;
	}
}

const _ = new Underscore();

var groupBy = _.groupBy([1.3, 2.1, 2.4], function (num) {
	return Math.floor(num);
});

//should return {1: [1.3], 2: [2.1, 2.4]}

console.log(groupBy);
