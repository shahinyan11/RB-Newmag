import React, { useCallback } from 'react'
import { Image, Text, View } from 'react-native'

import successImage from '@/assets/images/success.png'
import Button from '@/components/Button'
import styles from './styles'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import SCREENS from '@/navigation/SCREENS'
import { NavigationProp } from '@/navigation/types'

function PasswordUpdated() {
	const { t } = useTranslation()
	const navigation = useNavigation<NavigationProp>()

	const handlePress = useCallback(() => {
		navigation.navigate(SCREENS.SIGN_IN)
	}, [navigation])

	return (
		<View style={styles.container}>
			<Image source={successImage} style={styles.image} />
			<Text style={styles.title}>{t('auth.passwordUpdated')}</Text>
			<Text style={styles.desc}>{t('auth.youCanSignIn')}</Text>
			<Button
				type="default"
				label={t('auth.signIn')}
				style={styles.button}
				labelStyle={styles.buttonLabel}
				onPress={handlePress}
			/>
		</View>
	)
}

PasswordUpdated.displayName = 'PasswordUpdated'
export default PasswordUpdated
