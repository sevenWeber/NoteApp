import React from 'react';

let note_style={
    width:'340px',
    marginBottom:'10px',
    border:'2px solid #ddd',
    fontSize:'20px',
    lineHeight:'30px',
    padding:'0 5px',
    minHeight:'10px'
};
const Note = ({ text }) => (
    <div style={note_style}>{ text }</div>
);

export default Note;