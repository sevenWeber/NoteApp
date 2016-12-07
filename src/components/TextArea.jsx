import React from 'react';
import { connect } from 'react-redux';
import addNote from '../actions';

const textStyle = {
	root: {
		textAlign: 'center'
	},
	area: {
		width: '100%',
		height: '400px',
		fontSize: '20px'
	},
	button: {
		width: '150px',
		height: '50px',
		display: 'inline-block',
		marginTop: '30px',
		background: 'rgb(111, 158, 195)',
		fontSize: '20px'
	}
};

const TextArea = ({ dispatch }) => {
	let input;
	return (
		<div style={textStyle.root}>
			<textarea style={textStyle.area} ref={(node) => { input = node; }} />
			<input
				style={textStyle.button} type="button" value={'提交'}
				onClick={() => { dispatch(addNote(input.value)); input.value = ''; }}
			/>
		</div>
	);
};
TextArea.propTypes = {
	dispatch: React.PropTypes.function
};

export default connect()(TextArea);
