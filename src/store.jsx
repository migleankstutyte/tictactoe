import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers/index.js';

const saveToSessionStorage = state => {
	try {
		const sterializedState = JSON.stringify(state);
		sessionStorage.setItem('state', sterializedState);
	} catch (e) {
		console.log(e);
	}
};

const loadFromSessionStorage = state => {
	try {
		const sterializedState = sessionStorage.getItem('state');
		if (sterializedState === null) return undefined;
		return JSON.parse(sterializedState);
	} catch (e) {
		console.log(e);
		return undefined;
	}
};

const persistedState = loadFromSessionStorage();

const store = createStore(reducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => saveToSessionStorage(store.getState()));
export default store;
