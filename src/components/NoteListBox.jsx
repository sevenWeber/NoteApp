import React from 'react';
import NoteList from './NoteList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

const NoteListBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteList);


export default NoteListBox;




