import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useTranslation } from 'react-i18next'

import SCREENS from '@/navigation/SCREENS'
import { navigate } from '@/navigation'
import { TNotification } from '@/types'
import styles from './styles'

type Notification = {
	data: TNotification
	isNew?: boolean
}

function NotificationCard({ data, isNew }: Notification) {
	const { t } = useTranslation()

	const openNotification = () => navigate(SCREENS.SINGLE_NOTIFICATION, { notification: data })

	return (
		<TouchableOpacity style={styles.container} onPress={openNotification}>
			<View style={styles.row}>
				<Text style={styles.textBig}>{data.title}</Text>
				{isNew && <Text style={styles.newBadge}>{t('common.new')}</Text>}
			</View>
			<Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
				{data.message}
			</Text>
			<Text style={styles.date}>{data.created_at}</Text>
		</TouchableOpacity>
	)
}

NotificationCard.displayName = 'NotificationCard'
export default NotificationCard
