import { DRAW_X, DRAW_O } from '../utils/actionTypes';

export function drawXAction(index) {
	return dispatch => {
		return new Promise(resolve => {
			dispatch({
				type: DRAW_X,
				index
			});
			resolve();
		});
	};
}

export function drawOAction(index) {
	return dispatch => {
		return new Promise(resolve => {
			dispatch({
				type: DRAW_O,
				index
			});
			resolve();
		});
	};
}
