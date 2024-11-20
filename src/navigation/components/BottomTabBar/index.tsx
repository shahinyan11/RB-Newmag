import React, { useCallback } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types'

import * as CONST from '@/constants/CONST'
import SCREENS from '@/navigation/SCREENS'
import Icon from '@/components/Icon'
import { TIconNames } from '@/types'
import colors from '@/theme/colors'
import { RW } from '@/theme'
import styles from './styles'

type SingleTabProps = BottomTabBarProps & {
	route: any
	index: number
}

const tabIcons: { [key: string]: TIconNames } = {
	[SCREENS.HOME]: 'home',
	[SCREENS.BOOKS]: 'book',
	[SCREENS.AUDIOBOOKS]: 'music',
	[SCREENS.NEWS]: 'list',
	[SCREENS.PODCAST]: 'podcast',
}

function SingleTab({ route, index, state, descriptors, navigation }: SingleTabProps) {
	const { options } = descriptors[route.key]
	const isFocused = state.index === index
	const label =
		options.tabBarLabel !== undefined
			? options.tabBarLabel
			: options.title !== undefined
				? options.title
				: route.name

	const onPress = useCallback(() => {
		const event = navigation.emit({
			type: 'tabPress',
			target: route.key,
			canPreventDefault: true,
		})

		if (!isFocused && !event.defaultPrevented) {
			navigation.navigate(route.name)
		}
	}, [route, navigation, isFocused])

	const onLongPress = useCallback(() => {
		navigation.emit({
			type: 'tabLongPress',
			target: route.key,
		})
	}, [route, navigation])

	return (
		<TouchableOpacity
			key={index}
			accessibilityRole="button"
			onPress={onPress}
			onLongPress={onLongPress}
			style={styles.iconContainer}
			activeOpacity={CONST.ACTIVE_OPACITY}
		>
			<Icon
				name={tabIcons[route.name]}
				color={isFocused ? colors.red500 : colors.black200}
				width={RW(24)}
				height={RW(24)}
				onPress={onPress}
			/>
			<Text style={[styles.text, !isFocused && { color: colors.gray800 }]}>{label}</Text>
		</TouchableOpacity>
	)
}

function BottomTabBar(props: BottomTabBarProps) {
	return (
		<View style={styles.containerStyle}>
			{props.state.routes.map((route, index) => (
				<SingleTab key={route.key} {...props} route={route} index={index} />
			))}
		</View>
	)
}

BottomTabBar.displayName = 'BottomTabBar'
export default BottomTabBar
