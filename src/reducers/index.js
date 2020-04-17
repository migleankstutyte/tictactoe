import { combineReducers } from 'redux';

import boardReducer from './boardReducer';
import playerReducer from './playerReducer';
import gameStatusReducer from './gameStatusReducer';

const reducers = {
	board: boardReducer,
	players: playerReducer,
	status: gameStatusReducer
};

const reducer = combineReducers(reducers);

export default reducer;
