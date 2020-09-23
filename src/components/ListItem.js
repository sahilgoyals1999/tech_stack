import React,{ Component } from 'react'
import { UIManager,Text,TouchableWithoutFeedback,View,LayoutAnimation } from 'react-native'
import { CardSection,Card } from './common'
import { connect } from 'react-redux'
import * as actions from '../actions'

class ListItem extends Component {
	UNSAFE_componentWillUpdate() {
		LayoutAnimation.spring();
	}
	constructor() {
    super();
    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

	renderDescription() {
		const { library, expanded } = this.props;
		if(expanded)
			return (
				<CardSection>
				 <Text>
				  {library.item.description}
				 </Text>
				</CardSection>
			)
	}

	render() {
		const { titleStyle } = styles;
		const { id,title } = this.props.library.item;
		return (
			<TouchableWithoutFeedback
			onPress={() => this.props.selectLibrary(id)}
			>
			 <View>
			 <Card>
			  <CardSection>
			   <Text style={titleStyle}>
			    {title}
			   </Text>
			  </CardSection>
			  {this.renderDescription()}
			  </Card>
			 </View>
			</TouchableWithoutFeedback>
		)
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
}

const mapStateToProps = (state,ownProps) => { 
	const expanded = (state.selectedLibraryId === ownProps.library.item.id)
	return { expanded : expanded }
}

export default connect(mapStateToProps,actions)(ListItem)