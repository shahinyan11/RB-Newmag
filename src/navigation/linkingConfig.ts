import { Linking } from 'react-native'
import SCREENS from '@/navigation/SCREENS'

export const DEEP_LINKING_SCHEMA = 'newmag://'

const linkingConfig = {
	prefixes: [DEEP_LINKING_SCHEMA],
	config: {
		screens: {
			[SCREENS.ENTER_NEW_PASSWORD]: {
				path: 'reset/:reset_token',
			},
		},
	},
	async getInitialURL() {
		// Check if app was opened from a deep link
		const url = await Linking.getInitialURL()

		if (url != null) return url

		// Check if there is an initial firebase notification, when click notifcation in background
		// const message = await messaging().getInitialNotification()

		// // Get deep link from data
		// // if this is undefined, the app will open the default/home page
		// return message?.data?.link
		return undefined
	},
	subscribe(listener: any) {
		const onReceiveURL = ({ url }: { url: string }) => listener(url)

		// Listen to incoming links from deep linking
		const _listener = Linking.addEventListener('url', onReceiveURL)

		// Listen to firebase push notifications
		// const unsubscribeNotification = messaging().onNotificationOpenedApp(message => {
		// 	const url = message?.data?.link

		// 	if (url) {
		// 		// Any custom logic to check whether the URL needs to be handled

		// 		// Call the listener to let React Navigation handle the URL
		// 		listener(url)
		// 	}
		// })

		return () => {
			// Clean up the event listeners
			_listener.remove()
			// unsubscribeNotification()
		}
	},
}

export default linkingConfig
