import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import  { NoteStore } from '../store';

let text_style={
    root:{
        textAlign:'center'
    },
    area:{
        width:'100%',
        height:'400px',
        fontSize:'20px'
    },
    button:{
        width:'150px',
        height:'50px',
        display:'inline-block',
        marginTop:'30px',
        background:'rgb(111, 158, 195)',
        fontSize:'20px'
    }

};
let TextArea = ({ dispatch }) => {
    let input;
    return (
    <div style={text_style.root}>
        <textarea style={text_style.area} ref={node => { input=node;}}></textarea>
        <input style={text_style.button} type="button" value={"提交"} onClick={() => {
            dispatch(addNote(input.value));
            input.value = "";
        }}/>
    </div>
)};

TextArea = connect()(TextArea);
export default TextArea;