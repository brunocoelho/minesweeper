import _ from 'lodash';

const getBombsNumber = (matrix, rowIndex, colIndex) => {
	const positions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
	let counter = 0;

	_.forEach(positions, (position) => {
		if (matrix[rowIndex + position[0]] && matrix[rowIndex + position[0]][colIndex + position[1]]) {
			if (matrix[rowIndex + position[0]][colIndex + position[1]].value === 'BOMB') {
				counter += 1;
			}
		}
	});

	return counter;
}

const matrix = function (arr) {
	let matrix = [];

	while (arr.length) {
		matrix.push(arr.splice(0,16));
	};

	_.forEach(matrix, (row, rowIndex) => {
		_.forEach(row, (field, colIndex) => {
			if (!matrix[rowIndex][colIndex]) {
				matrix[rowIndex][colIndex] = {
					value: getBombsNumber(matrix, rowIndex, colIndex),
					show: false
				}
			}
		});
	});

	return matrix;
};

export default matrix;
