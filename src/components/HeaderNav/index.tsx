import React, { useCallback } from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import type { NavigationProp } from '@/navigation/types'
import SCREENS from '@/navigation/SCREENS'
import Icon from '@/components/Icon'
import { RW } from '@/theme'
import * as CONST from '@/constants/CONST'
import styles from './styles'
import { useSelector } from '@/store/hooks'
import { selectCartItemsCount } from '@/store/shopping/selectors'
import { selectNotifications } from '@/store/notifications/selectors'

const HeaderNav = () => {
	const navigation = useNavigation<NavigationProp>()
	const cartItemsCount = useSelector(selectCartItemsCount)
	const newNotifications = useSelector(selectNotifications())
	const showReadDot = newNotifications?.length > 0

	const goToNotifications = useCallback(() => navigation.navigate(SCREENS.NOTIFICATIONS), [])
	const goToAccount = useCallback(() => navigation.navigate(SCREENS.ACCOUNT), [])
	const goToCart = useCallback(() => navigation.navigate(SCREENS.CART), [])

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.iconContainer}
				activeOpacity={CONST.ACTIVE_OPACITY}
				onPress={goToAccount}
			>
				<Icon disabled name="person" width={RW(20)} height={RW(20)} />
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.iconContainer}
				activeOpacity={CONST.ACTIVE_OPACITY}
				onPress={goToNotifications}
			>
				<Icon name="bell" width={RW(20)} height={RW(20)} />
				{showReadDot && <View style={styles.redDot} />}
			</TouchableOpacity>
			<TouchableOpacity style={styles.iconContainer} onPress={goToCart}>
				<Icon name="cart" width={RW(20)} height={RW(20)} />
				{!!cartItemsCount && (
					<View style={styles.cartBadge}>
						<Text style={styles.cartBadgeText}>{cartItemsCount}</Text>
					</View>
				)}
			</TouchableOpacity>
		</View>
	)
}

HeaderNav.displayName = 'HeaderNav'
export default HeaderNav
