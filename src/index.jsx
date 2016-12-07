import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import NoteListBox from './components/NoteListBox';
import NoteCreationBox from './components/NoteCreationBox';
import NoteStore from './store';

const appStyle = {
	width: '800px',
	height: '620px',
	margin: '0 auto',
	overflow: 'hidden',
	border: '2px solid #666',
	padding: '0 20px'
};
function NoteApp() {
	return (
		<Provider store={NoteStore}>
			<div style={appStyle}>
				<h1>记事本</h1>
				<NoteListBox />
				<NoteCreationBox />
			</div>
		</Provider>
	);
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDom.render(<NoteApp />, app);
