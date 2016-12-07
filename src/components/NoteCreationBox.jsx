import React from 'react';
import TextArea from './TextArea';

const createStyle = {
	float: 'right',
	width: '360px',
	height: '500px'
};
const NoteCreationBox = () => (
	<div style={createStyle}>
		<TextArea />
	</div>
);

export default NoteCreationBox;
