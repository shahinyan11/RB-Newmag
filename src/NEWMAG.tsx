import React, { useCallback, useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import TrackPlayer from 'react-native-track-player'

import '@/i18n'
import { SplashScreen } from '@/Splash'
import NavigationRoot from '@/navigation/NavigationRoot'
import ToastMessage from '@/components/ToastMessage'
import BottomSheet from '@/components/BottomSheet'
import Colors from '@/theme/colors'
import NoInternet from '@/components/NoInternet'
import usePushNotification from '@/hooks/usePushNotification'

TrackPlayer.setupPlayer()

export const NEWMAG: React.FC = () => {
	const [splashVisible, setSplashVisible] = useState(true)
	const {
		requestUserPermission,
		listenToForegroundNotifications,
		onNotificationOpenedAppFromBackground,
		onNotificationOpenedAppFromQuit,
	} = usePushNotification()

	useEffect(() => {
		try {
			requestUserPermission()
			onNotificationOpenedAppFromQuit()
			listenToForegroundNotifications()
			onNotificationOpenedAppFromBackground()
		} catch (error) {
			console.error('APP ERROR:', error)
		}
	}, [])

	const onLoadEnd = useCallback(() => {
		setSplashVisible(false)
	}, [])

	return (
		<>
			<StatusBar translucent={true} barStyle="dark-content" backgroundColor={Colors.white} />
			{splashVisible ? <SplashScreen onLoadEnd={onLoadEnd} /> : <NavigationRoot />}
			<ToastMessage />
			<BottomSheet />
			<NoInternet />
		</>
	)
}
