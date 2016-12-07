import { combineReducers } from 'redux';

const notes = (state = [], action) => {
	switch (action.type) {
	case 'ADD_NOTE':
		return [
			...state,
			{
				id: action.id,
				text: action.text
			}
		];
	default:
		return state;
	}
};
const NoteApp = combineReducers({ notes });
export default NoteApp;
