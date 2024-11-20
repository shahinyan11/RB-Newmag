import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './rootReducer'
import { axiosMiddleware } from '@/httpClient'
import { persistStore } from 'redux-persist'
import reactotron from '../../ReactotronConfig'

const store = configureStore({
	reducer: rootReducer,
	devTools: true,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(axiosMiddleware),
	// @ts-ignore
	enhancers: getDefaultEnhancers => getDefaultEnhancers().concat(reactotron.createEnhancer()),
})

export const persistor = persistStore(store)
export default store
