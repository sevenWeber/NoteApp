let nextNoteId = 0;
export const addNote = (text) => {
    return {
        type: "ADD_NOTE",
        id: nextNoteId++,
        text
    };
};

















