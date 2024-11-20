import React, { useEffect, useState } from 'react'
import { Image, View } from 'react-native'
import Modal from 'react-native-modal'
import NetInfo from '@react-native-community/netinfo'
import image from '@/assets/images/noInternet.png'
import styles from './styles'
import Text from '@/components/Text'
import { useTranslation } from 'react-i18next'

const NoInternet = () => {
	const { t } = useTranslation()
	const [isNetEnabled, setNetEnabled] = useState(true)
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const removeNetInfoSubscription = NetInfo.addEventListener(state => {
			const offline = !(state.isConnected && state.isInternetReachable)
			setNetEnabled(offline)

			setVisible(!state.isConnected)
		})

		return () => removeNetInfoSubscription()
	}, [isNetEnabled])

	return (
		<Modal style={{ margin: 0 }} isVisible={visible} useNativeDriver={true}>
			<View style={styles.container}>
				<Image source={image} style={styles.image} />
				<Text size="S17" style={styles.text}>
					{t('messages.checkYourInternetConnection')}
				</Text>
			</View>
		</Modal>
	)
}

export default NoInternet
