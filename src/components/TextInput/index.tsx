import type { ForwardedRef } from 'react'
import React, { forwardRef, useCallback, useMemo, useRef, useState } from 'react'
import { TextInput as Input, TouchableWithoutFeedback, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

import { RH, RW } from '@/theme'
import Icon from '@/components/Icon'

import { ITextInputProps } from './types'
import styles from './styles'
import colors from '@/theme/colors'
import Colors from '@/theme/colors'
import { NativeSyntheticEvent } from 'react-native/Libraries/Types/CoreEventTypes'
import { TextInputFocusEventData } from 'react-native/Libraries/Components/TextInput/TextInput'

const opts = {
	duration: 200,
}

function TextInput(
	{
		style,
		value,
		animatedLabel,
		error,
		leftIcon,
		rightIcon,
		placeholder,
		containerStyle,
		secureTextEntry,
		onLeftIconPress,
		onRightIconPress,
		numberOfLines = 1,
		leftIconSize = 20,
		rightIconSize = 20,
		leftIconColor,
		rightIconColor,
		placeholderTextColor,
		...props
	}: ITextInputProps,
	ref: ForwardedRef<View>,
) {
	const height = useSharedValue(0)
	const scale = useSharedValue(0)
	const inputRef = useRef<Input>(null)
	const [focused, setFocused] = useState(false)
	const [passwordVisible, togglePasswordVisibility] = useState(false)

	const isPasswordField = useMemo(() => secureTextEntry, [secureTextEntry])

	const handleRightIconPress = useCallback(() => {
		if (isPasswordField) {
			togglePasswordVisibility(prev => !prev)
		} else {
			onRightIconPress?.()
		}
	}, [isPasswordField, onRightIconPress])

	const handleFocus = useCallback((event: NativeSyntheticEvent<TextInputFocusEventData>) => {
		props.onFocus?.(event)
		startLabelAnimation(false)
		setFocused(true)
	}, [])

	const handleBlur = useCallback((event: NativeSyntheticEvent<TextInputFocusEventData>) => {
		props.onBlur?.(event)
		startLabelAnimation(!value)
		setFocused(false)
	}, [])

	const startLabelAnimation = (shouldAnimateBack: boolean) => {
		height.value = withTiming(RH(shouldAnimateBack ? 0 : 50), opts)
		scale.value = withTiming(shouldAnimateBack ? 0 : 1, opts)
	}

	const animatedStyles = useAnimatedStyle(
		() => ({
			maxHeight: height.value,
			transform: [{ scaleY: scale.value }],
		}),
		[height.value, scale.value],
	)

	return (
		<View
			style={[
				styles.wrapper,
				focused && styles.active,
				!!error && styles.error,
				containerStyle,
			]}
		>
			<TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
				<View style={[styles.width_100, styles.height_100, styles.jc_c]}>
					{animatedLabel && (
						<Animated.Text style={[styles.label, animatedStyles]}>
							{animatedLabel}
						</Animated.Text>
					)}
					<View style={styles.container}>
						{leftIcon && (
							<Icon
								name={leftIcon}
								color={leftIconColor}
								style={styles.leftIcon}
								width={RW(leftIconSize)}
								height={RW(leftIconSize)}
								onPress={onLeftIconPress}
							/>
						)}
						<Input
							{...props}
							autoCapitalize="none"
							value={value}
							ref={inputRef}
							cursorColor={colors.black}
							selectionColor={colors.black}
							onFocus={handleFocus}
							onBlur={handleBlur}
							placeholder={
								!focused ? animatedLabel ?? placeholder ?? 'undefined' : ''
							}
							placeholderTextColor={placeholderTextColor ?? Colors.gray800}
							secureTextEntry={passwordVisible ? false : secureTextEntry}
							style={[
								styles.input,
								!!error && styles.textError,
								leftIcon && styles.inputWithLeftIcon,
								rightIcon && styles.inputWithRightIcon,
								style,
							]}
						/>
						{leftIcon && (
							<Icon
								color={rightIconColor}
								onPress={handleRightIconPress}
								name={leftIcon}
								style={styles.rightIcon}
								width={RW(rightIconSize)}
								height={RW(rightIconSize)}
							/>
						)}
					</View>
				</View>
			</TouchableWithoutFeedback>
		</View>
	)
}

export default forwardRef(TextInput)
