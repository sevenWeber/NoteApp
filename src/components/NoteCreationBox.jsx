import React from 'react';
import TextArea from './TextArea';

let create_style={
    float:'right',
    width:'360px',
    height:'500px'
};
const NoteCreationBox = () => (
    <div style={create_style}>
        <TextArea />
    </div>
);

export default NoteCreationBox;