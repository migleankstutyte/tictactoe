import { DRAW_X, DRAW_O } from '../utils/actionTypes';

const initialState = [null, null, null, null, null, null, null, null, null];

const boardReducer = (state = initialState, action) => {
	switch (action.type) {
		case DRAW_X:
			const newXState = [...state];
			newXState[action.index] = 'X';
			return newXState;

		case DRAW_O:
			const newOState = [...state];
			newOState[action.index] = 'O';
			return newOState;

		default:
			return state;
	}
};

export default boardReducer;
