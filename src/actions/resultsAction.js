import { X_WINS, O_WINS, DRAW, CLEAR } from '../utils/actionTypes';
import calculateWinner from '../utils/resultHelper';

export function checkResult(board) {
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
}

export function clearResultAction(state) {
	return {
		type: CLEAR,
		state
	};
}

export default checkResult;
