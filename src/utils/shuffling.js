let shuffling = function (arr) {
	let arrLen = arr.length,
		i,
		random,
		swap;

	for (i = 0; i < arrLen; i++) {
		random = Math.floor(Math.random() * i);
		swap = arr[i];
		arr[i] = arr[random];
		arr[random] = swap;
	}

	return arr;
};

export default shuffling;
