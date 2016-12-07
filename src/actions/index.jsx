let nextNoteId = 0;
const addNote = (text) => {
	nextNoteId += 1;
	return {
		type: 'ADD_NOTE',
		id: nextNoteId,
		text
	};
};
export default addNote;
