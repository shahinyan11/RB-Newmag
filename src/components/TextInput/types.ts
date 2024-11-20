import { StyleProp, TextInputProps, ViewStyle } from 'react-native'

import { TIconNames } from '@/types'

export interface ITextInputProps extends TextInputProps {
	error?: string
	animatedLabel?: string
	leftIcon?: TIconNames
	rightIcon?: TIconNames
	leftIconSize?: number
	rightIconSize?: number
	leftIconColor?: string
	rightIconColor?: string
	onLeftIconPress?: () => void
	onRightIconPress?: () => void
	containerStyle?: StyleProp<ViewStyle>
}
