import React from 'react';
import { View } from 'react-native';

function CardSection(props) {
	return (
		<View style={styles.containerStyle}>
         {props.children}
		</View>
	)
}
const styles = {
	containerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justiftContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
} 
export { CardSection }