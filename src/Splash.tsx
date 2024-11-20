import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { font, RH, RW, TEXT1 } from '@/theme'
import Icon from '@/components/Icon'
import { TFunc } from '@/types'
import { useTranslation } from 'react-i18next'

interface ISplashScreenProps {
	onLoadEnd: TFunc
}

export const SplashScreen: React.FC<ISplashScreenProps> = ({ onLoadEnd }) => {
	const { t } = useTranslation()

	useEffect(() => {
		const timer = setTimeout(() => {
			onLoadEnd()
			clearTimeout(timer)
		}, 1000)
		return () => {
			clearTimeout(timer)
		}
	}, [onLoadEnd])

	return (
		<View style={styles.container}>
			<Icon name="brand" height={RH(50)} width={RW(231)} />
			<Text style={styles.desc}>{t('splash.publishingHouse')}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	desc: {
		bottom: RH(54),
		fontWeight: '600',
		position: 'absolute',
		textTransform: 'uppercase',
		...font({
			fontSize: 20,
			color: TEXT1,
			lineHeight: 24,
			fontFamily: 'semiBold',
		}),
	},
})
