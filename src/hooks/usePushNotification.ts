import messaging from '@react-native-firebase/messaging'
import DEVICE from '@/constants/DEVICE'
import { requestNotifications, RESULTS } from 'react-native-permissions'
import store from '@/store'
import { updateAppState } from '@/store/app'
import { navigate } from '@/navigation'
import SCREENS from '@/navigation/SCREENS'
import { TNotification } from '@/types'

const usePushNotification = () => {
	const requestUserPermission = async () => {
		let enabled

		if (DEVICE.IS_IOS) {
			const authStatus = await messaging().requestPermission()
			enabled =
				authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
				authStatus === messaging.AuthorizationStatus.PROVISIONAL
		}

		if (DEVICE.IS_ANDROID) {
			const res = await requestNotifications(['alert', 'badge', 'sound'])
			enabled = res.status === RESULTS.GRANTED
		}

		if (enabled) {
			const token = await getFCMToken()
			store.dispatch(updateAppState({ fcmToken: token }))
		}
	}

	const getFCMToken = async () => {
		const fcmToken = await messaging().getToken()
		if (fcmToken) {
			console.debug('Your Firebase Token is:', fcmToken)
		} else {
			console.error('APP ERROR:', 'No token received')
		}
		return fcmToken ?? ''
	}

	const listenToForegroundNotifications = async () => {
		const unsubscribe = messaging().onMessage(async remoteMessage => {
			console.log('A new message arrived! (FOREGROUND)', JSON.stringify(remoteMessage))
		})

		return unsubscribe
	}

	const onNotificationOpenedAppFromBackground = async () => {
		const unsubscribe = messaging().onNotificationOpenedApp(async remoteMessage => {
			navigate(SCREENS.SINGLE_NOTIFICATION, {
				notification: remoteMessage.data as TNotification,
			})

			console.log(
				'onNotificationOpenedAppFromBackground',
				JSON.stringify(remoteMessage, null, 1),
			)
		})
		return unsubscribe
	}

	const onNotificationOpenedAppFromQuit = async () => {
		const message = await messaging().getInitialNotification()

		if (message) {
			navigate(SCREENS.SINGLE_NOTIFICATION, {
				notification: message.data as TNotification,
			})

			console.log('onNotificationOpenedAppFromQuit', JSON.stringify(message, null, 1))
		}
	}

	return {
		requestUserPermission,
		getFCMToken,
		listenToForegroundNotifications,
		onNotificationOpenedAppFromBackground,
		onNotificationOpenedAppFromQuit,
	}
}

export default usePushNotification
