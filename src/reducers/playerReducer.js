import { PLAYER_X, TURN, PLAYER_O } from '../utils/actionTypes';

const initialState = {
	X: 'X',
	O: 'O',
	turn: 'X'
};

const playerReducer = (state = initialState, action) => {
	switch (action.type) {
		case PLAYER_X:
			const newXState = { ...state };

			if (action.player === 'X') {
				newXState.X = 'X';
				newXState.O = 'O';
			} else {
				newXState.X = 'O';
				newXState.O = 'X';
			}

			return newXState;

		case PLAYER_O:
			const newOState = { ...state };

			if (action.player === 'X') {
				newOState.X = 'O';
				newOState.O = 'X';
			} else {
				newOState.X = 'X';
				newOState.O = 'O';
			}

			return newOState;

		case TURN:
			const newState = { ...state };

			if (newState.turn === 'X') {
				newState.turn = 'O';
			} else {
				newState.turn = 'X';
			}

			return newState;

		default:
			return state;
	}
};

export default playerReducer;
