import React, { useCallback, useEffect } from 'react'
import { SectionList, Text, View } from 'react-native'
import type { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs'

import { Section, TGroupedNotifications, TNotification } from '@/types'
import { getNotificationsReq } from '@/store/notifications/operations'
import NotificationCard from '@/components/cards/NotificationCard'
import { NotificationsTabParamList } from '@/navigation/types'
import { useDispatch, useSelector } from '@/store/hooks'
import styles from './styles'
import { selectNotifications } from '@/store/notifications/selectors'

type NotificationsViewProps = MaterialTopTabScreenProps<NotificationsTabParamList>

function NotificationsView({ route }: NotificationsViewProps) {
	const dispatch = useDispatch()
	const isRead = route.params?.isRead
	const notifications = useSelector(selectNotifications(isRead))

	useEffect(() => {
		dispatch(getNotificationsReq(route.params?.isRead))
	}, [isRead])

	const renderItem = useCallback(
		({ item }: { item: TNotification }) => <NotificationCard data={item} isNew={!isRead} />,
		[],
	)

	const renderSectionHeader = useCallback(
		({ section: { date } }: Section<TGroupedNotifications[number]>) => (
			<Text style={styles.sectionTitle}>{date}</Text>
		),
		[],
	)

	return (
		<View style={styles.container}>
			<SectionList
				sections={notifications}
				renderItem={renderItem}
				renderSectionHeader={renderSectionHeader}
				contentContainerStyle={styles.sectionListContainer}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	)
}

NotificationsView.displayName = 'NotificationsView'
export default NotificationsView
