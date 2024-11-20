import React, { FC, useCallback, useMemo, useRef, useState } from 'react'
import { StyleProp, Text, TextInputProps, TextStyle, View, ViewStyle } from 'react-native'
import type { NativeSyntheticEvent } from 'react-native/Libraries/Types/CoreEventTypes'
import type { TextInputFocusEventData } from 'react-native/Libraries/Components/TextInput/TextInput'
import { useTranslation } from 'react-i18next'

import { BLACK } from '@/theme'
import styles from './styles'
import PhoneInput from 'react-native-phone-number-input'
import parsePhoneNumberFromString from 'libphonenumber-js'

export type PhoneNumberInputProps = {
	label?: string
	error?: string
	textInputProps?: TextInputProps
	onFocus?: TextInputProps['onFocus']
	onBlur?: TextInputProps['onBlur']
	onChangeText?: (value: string) => void
	wrapperStyle?: StyleProp<ViewStyle>
	containerStyle?: StyleProp<ViewStyle>
	labelStyle?: StyleProp<TextStyle>
	inputContainerStyle?: StyleProp<ViewStyle>
	value?: string
}

const PhoneNumberInput: FC<PhoneNumberInputProps> = ({
	label,
	error,
	textInputProps,
	onChangeText,
	onFocus,
	onBlur,
	wrapperStyle,
	containerStyle,
	labelStyle,
	value = '',
}) => {
	const { t } = useTranslation()
	const phoneInput = useRef<PhoneInput>(null)
	const [isFocused, setIsFocused] = useState(false)

	const handleFocus = useCallback((event: NativeSyntheticEvent<TextInputFocusEventData>) => {
		onFocus?.(event)
		setIsFocused(true)
	}, [])

	const handleBlur = useCallback((event: NativeSyntheticEvent<TextInputFocusEventData>) => {
		onBlur?.(event)
		setIsFocused(false)
		// const isValid = phoneInput.current?.isValidNumber(value)
	}, [])

	const isBlur = useMemo(() => !isFocused && !error, [isFocused, error])

	const phoneNumberObj = useMemo(() => parsePhoneNumberFromString(value), [value])

	return (
		<View style={[styles.wrapper, wrapperStyle]}>
			{label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
			<PhoneInput
				key={phoneNumberObj?.country}
				ref={phoneInput}
				layout="first"
				//@ts-ignore
				defaultCode={phoneNumberObj?.country}
				onChangeFormattedText={text => {
					onChangeText?.(text)
				}}
				textInputProps={{
					...textInputProps,
					onFocus: handleFocus,
					onBlur: handleBlur,
					cursorColor: BLACK,
					selectionColor: BLACK,
					placeholder: '',
					value: phoneNumberObj?.nationalNumber,
				}}
				containerStyle={[styles.container, containerStyle, isBlur && styles.containerBlur]}
				textContainerStyle={styles.inputContainer}
				textInputStyle={styles.input}
				codeTextStyle={styles.input}
			/>
			{error && <Text style={styles.error}>{t(error)}</Text>}
		</View>
	)
}

PhoneNumberInput.displayName = 'PhoneNumberInput'
export default PhoneNumberInput
