import { X_WINS, O_WINS, DRAW } from '../utils/actionTypes';
import calculateWinner from '../utils/resultHelper';

const checkResult = board => {
	if (calculateWinner(board, 'X')) {
		return {
			type: X_WINS
		};
	} else if (calculateWinner(board, 'O')) {
		return {
			type: O_WINS
		};
	} else {
		const check = board.filter(value => value === null);
		if (check.length === 0) {
			return {
				type: DRAW
			};
		} else {
			return {
				type: 'RANDOM'
			};
		}
	}
};

export default checkResult;
