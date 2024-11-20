import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'

import * as CONST from '@/constants/CONST'
import { RW } from '@/theme'

import { IButtonProps } from './types'
import styles from './styles'

function Button({
	label,
	loading,
	onPress,
	disabled,
	children,
	style = {},
	labelStyle,
	type = 'default',
	activeOpacity = CONST.ACTIVE_OPACITY,
	addBefore,
	addAfter,
	...rest
}: IButtonProps) {
	return (
		<TouchableOpacity
			{...rest}
			disabled={disabled || loading}
			activeOpacity={activeOpacity}
			style={[styles.container, styles[type], disabled && styles.disabled, style]}
			onPress={onPress}
		>
			{loading ? (
				<ActivityIndicator size={RW(24)} />
			) : (
				<>
					<View>{addBefore?.()}</View>
					<Text style={[styles.label, styles[`${type}Label`], labelStyle]}>
						{label ?? children}
					</Text>
					<View>{addAfter?.()}</View>
				</>
			)}
		</TouchableOpacity>
	)
}

Button.displayName = 'Button'
export default Button
