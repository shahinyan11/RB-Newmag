import React, { ReactNode } from 'react'
import { Text, TextStyle, View, ViewStyle } from 'react-native'
import { goBack } from '@/navigation'
import Icon from '@/components/Icon'
import { RW } from '@/theme'
import styles from './styles'

export type HeaderProps = {
	title?: string
	LeftComponent?: ReactNode
	RightComponent?: ReactNode
	style?: ViewStyle
	titleStyle?: TextStyle
	hideBackIcon?: boolean
	onPressBack?: () => void
}
const Header = ({
	style,
	titleStyle,
	LeftComponent,
	RightComponent,
	title = '',
	hideBackIcon = false,
	onPressBack = undefined,
}: HeaderProps) => {
	return (
		<View style={[styles.container, style]}>
			<View style={styles.leftView}>
				{!hideBackIcon && (
					<Icon
						name="arrow-left"
						width={RW(24)}
						height={RW(24)}
						onPress={onPressBack || goBack}
					/>
				)}
				{LeftComponent}
			</View>
			<Text style={[styles.title, titleStyle]}>{title}</Text>
			<View>{RightComponent}</View>
		</View>
	)
}

export default Header
