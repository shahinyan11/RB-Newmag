import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native'
import TrackPlayer from 'react-native-track-player'

import { APP_NAME } from '@/constants/CONST'
import App from './App'
import { PlaybackService } from '@/services/PlaybackService'
import messaging from '@react-native-firebase/messaging'

messaging().setBackgroundMessageHandler(async remoteMessage => {
	console.debug('A new message arrived! (BACKGROUND)', JSON.stringify(remoteMessage, null, 1))
})

AppRegistry.registerComponent(APP_NAME, () => App)
// AppRegistry.registerComponent(...);
TrackPlayer.registerPlaybackService(() => PlaybackService)
