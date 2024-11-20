import React, { ReactNode, useCallback } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

import type ChildrenProps from '@/types/Utils/ChildrenProps'
import HeaderNav from '@/components/HeaderNav'
import Header from '@/components/Header'
import Icon from '@/components/Icon'
import styles from './styles'
import SafeAreaContainer from '@/components/containers/SafeAreaContainer'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from '@/navigation/types'
import SCREENS from '@/navigation/SCREENS'

type ScreenWrapperProps = ChildrenProps & {
	contentContainerStyle?: StyleProp<ViewStyle>
	HeaderComponent?: ReactNode
}

function ScreenWrapper({ contentContainerStyle, HeaderComponent, children }: ScreenWrapperProps) {
	const navigation = useNavigation<NavigationProp>()

	const handlePress = useCallback(() => {
		navigation.navigate(SCREENS.HOME)
	}, [])

	return (
		<SafeAreaContainer>
			{HeaderComponent ?? (
				<Header
					style={styles.header}
					hideBackIcon
					LeftComponent={<Icon name="logo" onPress={handlePress} />}
					RightComponent={<HeaderNav />}
				/>
			)}
			<View style={[styles.fl_1, contentContainerStyle]}>{children}</View>
		</SafeAreaContainer>
	)
}

ScreenWrapper.displayName = 'ScreenWrapper'
export default ScreenWrapper
