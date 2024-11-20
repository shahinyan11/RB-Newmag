import React, { FC, useEffect } from 'react'
import { Text } from 'react-native'
import styles from './styles'
import Header from '@/components/Header'
import { StackScreenProps } from '@react-navigation/stack'
import { PrivateScreensParamList } from '@/navigation/types'
import ScreenWrapper from '@/components/ScreenWrapper'
import { useTranslation } from 'react-i18next'
import { useDispatch } from '@/store/hooks'
import { readNotificationReq } from '@/store/notifications/operations'

type SingleNotificationScreenProps = StackScreenProps<PrivateScreensParamList, 'singleNotification'>

const SingleNotificationScreen: FC<SingleNotificationScreenProps> = ({ route }) => {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const notification = route.params.notification

	useEffect(() => {
		dispatch(readNotificationReq(notification.id))
	}, [])

	return (
		<ScreenWrapper
			HeaderComponent={<Header title={t('common.notifications')} />}
			contentContainerStyle={styles.ph_10}
		>
			<Text style={styles.date}>{notification.created_at}</Text>
			<Text style={styles.title}>{notification.title}</Text>
			<Text style={styles.text}>{notification.message}</Text>
		</ScreenWrapper>
	)
}

SingleNotificationScreen.displayName = 'SingleNotificationScreen'
export default SingleNotificationScreen
