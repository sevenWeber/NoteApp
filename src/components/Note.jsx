import React from 'react';

const noteStyle = {
	width: '340px',
	marginBottom: '10px',
	border: '2px solid #ddd',
	fontSize: '20px',
	lineHeight: '30px',
	padding: '0 5px',
	minHeight: '10px'
};
const Note = ({ text }) => (
	<div style={noteStyle}>{ text }</div>
);
Note.propTypes = {
	text: React.PropTypes.string.isRequired
};
Note.propTypes = {
	text: React.PropTypes.string.isRequired
};

export default Note;
