import React from 'react';
import Note from './Note';


const listStyle = {
	float: 'left',
	width: '360px',
	height: '474px',
	border: '2px solid rgb(111, 158, 195)',
	padding: '10px'
};
const NoteList = ({ notes }) => (
	<div style={listStyle}>
		{notes.map(note =>
			<Note
				key={note.id}
				{...note}
			/>
		)}
	</div>
);

NoteList.propTypes = {
	notes: React.PropTypes.Object
};
export default NoteList;
