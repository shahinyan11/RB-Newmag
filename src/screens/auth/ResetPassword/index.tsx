import React, { useCallback } from 'react'
import { Image, Text } from 'react-native'

import mailSentImage from '@/assets/images/mail-sent.png'
import Button from '@/components/Button'
import styles from './styles'
import ScreenWrapper from '@/components/ScreenWrapper'
import Header from '@/components/Header'
import { useNavigation } from '@react-navigation/native'
import SCREENS from '@/navigation/SCREENS'
import { NavigationProp } from '@/navigation/types'
import { useTranslation } from 'react-i18next'

function ResetPasswordScreen() {
	const { t } = useTranslation()
	const navigation = useNavigation<NavigationProp>()

	const handlePress = useCallback(() => {
		navigation.navigate(SCREENS.SIGN_IN)
	}, [])

	return (
		<ScreenWrapper
			contentContainerStyle={styles.container}
			HeaderComponent={<Header title={t('auth.forgotPassword')} />}
		>
			<Image source={mailSentImage} style={styles.image} />
			<Text style={styles.title}>{t('auth.successSentTitle')}</Text>
			<Text style={styles.desc}>{t('auth.successSentDesc')}</Text>
			<Button
				type="default"
				label={t('auth.signIn')}
				style={styles.button}
				labelStyle={styles.buttonLabel}
				onPress={handlePress}
			/>
		</ScreenWrapper>
	)
}

ResetPasswordScreen.displayName = 'ResetPasswordScreen'
export default ResetPasswordScreen
