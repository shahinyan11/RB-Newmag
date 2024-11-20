import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'

import appReducer from './app'
import authReducer from './auth'
import userReducer from './user'
import modalReducer from './modal'
import audioPlayerReducer from './audioPlayer'
import newsReducer from './news'
import booksReducer from './books'
import channelsReducer from './channels'
import audiobooksReducer from './audiobooks'
import shoppingReducer from './shopping'
import notificationsReducer from './notifications'

const rootReducer = combineReducers({
	app: appReducer,
	auth: authReducer,
	user: userReducer,
	modal: modalReducer,
	audioPlayer: audioPlayerReducer,
	news: newsReducer,
	books: booksReducer,
	channels: channelsReducer,
	audiobooks: audiobooksReducer,
	shopping: shoppingReducer,
	notifications: notificationsReducer,
})

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['auth'],
}

export default persistReducer(persistConfig, rootReducer)
