import { positions } from '../constants';

const getBombsNumber = (matrix, rowIndex, colIndex) => {
	let counter = 0;

	positions.forEach((position) => {
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

	matrix.forEach((row, rowIndex) => {
		row.forEach((field, colIndex) => {
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
