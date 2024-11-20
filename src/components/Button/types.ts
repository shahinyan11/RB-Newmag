import { TextStyle, TouchableOpacityProps } from 'react-native'

import type { TIconNames } from '@/types'
import { ReactNode } from 'react'

export interface IButtonProps extends TouchableOpacityProps {
	label?: string
	loading?: boolean
	leftIcon?: TIconNames
	rightIcon?: TIconNames
	labelStyle?: TextStyle
	type?: 'default' | 'outline' | 'primary' | 'danger' | 'none'
	addBefore?: () => ReactNode
	addAfter?: () => ReactNode
	onPress?: () => void
}
