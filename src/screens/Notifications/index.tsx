import React from 'react'
import { View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { useTranslation } from 'react-i18next'
import topTabNavigationOptions from '@/navigation/options/topTabBarScreenOptions'
import { NotificationsTabParamList } from '@/navigation/types'
import SCREENS from '@/navigation/SCREENS'
import NotificationsView from '@/screens/Notifications/NotificationsView'
import Header from '@/components/Header'
import styles from './styles'

const Tab = createMaterialTopTabNavigator<NotificationsTabParamList>()

function NotificationsScreen() {
	const { t } = useTranslation()

	return (
		<View style={styles.container}>
			<Header title={t('common.notifications')} style={styles.header} />

			<Tab.Navigator
				screenOptions={topTabNavigationOptions}
				sceneContainerStyle={{ backgroundColor: 'transparent' }}
			>
				<Tab.Screen
					name={SCREENS.NOTIFICATIONS_NEW}
					component={NotificationsView}
					options={{ tabBarLabel: t('common.notRead') }}
				/>
				<Tab.Screen
					name={SCREENS.NOTIFICATIONS_HISTORY}
					component={NotificationsView}
					initialParams={{ isRead: true }}
					options={{ tabBarLabel: t('common.history') }}
				/>
			</Tab.Navigator>
		</View>
	)
}

NotificationsScreen.displayName = 'NotificationsScreen'
export default NotificationsScreen
