import { createStore } from 'redux';
import NoteApp from '../reduces';

const NoteStore = createStore(NoteApp);
export default NoteStore;
