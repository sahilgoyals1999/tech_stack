import React from 'react';
import { Text,TouchableOpacity } from 'react-native';

function Button({ onPress, children }) {
	const { buttonStyle,textStyle } = styles;
	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
		<Text style={textStyle}>
		{children}
		</Text>
		</TouchableOpacity>
	)
}

const styles = {
	buttonStyle: {
		alignSelf: 'stretch',
		backgroundColor: 'fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 15,
		marginRight: 15,
	},
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 18,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	}
}

export { Button };