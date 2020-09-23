import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducers from './reducers'
import { Header } from './components/common'
import LibraryList from './components/LibraryList'

export default function App() {
	return (
		<Provider store={createStore(reducers)}>
		 <View sytle={{ flex: 1 }}>
	      <Header headertext="Tech_Stack" />
		   <LibraryList />
		 </View>
		</Provider>
	)
}