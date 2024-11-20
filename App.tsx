import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import store from '@/store'
import { NEWMAG } from '@/NEWMAG'

if (__DEV__) {
	require('./ReactotronConfig')
}

const App: React.FC = () => {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Provider store={store}>
				<NEWMAG />
			</Provider>
		</GestureHandlerRootView>
	)
}

export default App
