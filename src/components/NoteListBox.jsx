import { connect } from 'react-redux';
import NoteList from './NoteList';

const mapStateToProps = state => ({ notes: state.notes });

const mapDispatchToProps = () => ({});

const NoteListBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteList);


export default NoteListBox;
