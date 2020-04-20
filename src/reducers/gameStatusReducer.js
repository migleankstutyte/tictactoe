import { X_WINS, O_WINS, DRAW, CLEAR } from '../utils/actionTypes';

const initialState = {
	win: null,
	DRAW: false
};

const gameStatusReducer = (state = initialState, action) => {
	switch (action.type) {
		case X_WINS:
			return {
				win: 'X',
				draw: false
			};

		case O_WINS:
			return {
				win: 'O',
				draw: false
			};

		case DRAW:
			return {
				win: null,
				draw: true
			};

		case CLEAR:
			return initialState;

		default:
			return state;
	}
};

export default gameStatusReducer;
