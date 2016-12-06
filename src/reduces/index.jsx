import { combineReducers } from 'redux';

const notes= (state = [], action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return [
                ...state,
                {
                    id:action.id,
                    text:action.text
                }
            ];
        default:
            return state;
    }
};
export const NoteApp = combineReducers({
    notes
});

