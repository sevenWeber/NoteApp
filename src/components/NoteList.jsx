import React from 'react';
import Note from './Note';


let list_style={
    float:'left',
    width:'360px',
    height:'474px',
    border:'2px solid rgb(111, 158, 195)',
    padding:'10px'
};
const NoteList = ({ notes }) =>{
  return  (
      <div style={list_style}>
          {notes.map(note =>
              <Note
                  key={note.id}
                  {...note}
              />
          )}
      </div>
  );
};
export default NoteList;