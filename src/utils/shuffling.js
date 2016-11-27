const getFields = function() {
	let a = Array(205).fill(undefined);
	for (var i = 0; i < 51; i++) {
		a.push({ value: 'BOMB', show: false });
	}
	return a;
}

let shuffling = function () {
	let arr = getFields();
	let arrLen = arr.length;
	let i;
	let random;
	let swap;

	for (i = 0; i < arrLen; i++) {
		random = Math.floor(Math.random() * i);
		swap = arr[i];
		arr[i] = arr[random];
		arr[random] = swap;
	}

	return arr;
};

export default shuffling;
