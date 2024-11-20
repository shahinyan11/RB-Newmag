import React, { createRef, useCallback, useEffect, useState } from 'react'
import { TextInput, TextInputProps, View, ViewStyle } from 'react-native'

import styles from './styles'
import Icon from '@/components/Icon'

type SearchBarProps = TextInputProps & {
	containerStyle?: ViewStyle
	onChange?: (val: string) => void
	onFocusedStateChange?: (val: boolean) => void
}

function SearchBar({
	containerStyle,
	onFocusedStateChange,
	placeholder,
	...props
}: SearchBarProps) {
	const inputRef = createRef<TextInput>()
	const [isFocused, setIsFocused] = useState(false)

	useEffect(() => {
		onFocusedStateChange?.(isFocused)
	}, [isFocused])

	const handleFocus = useCallback(() => setIsFocused(true), [])
	const handleBlur = useCallback(() => setIsFocused(false), [])

	const handleClear = useCallback(() => {
		inputRef.current?.blur()
	}, [inputRef])

	return (
		<View style={[styles.container, containerStyle]}>
			{isFocused && <Icon name="arrow-left" onPress={handleClear} />}
			<View style={styles.inputContainer}>
				<Icon name="search" />
				<TextInput
					ref={inputRef}
					{...props}
					onFocus={handleFocus}
					onBlur={handleBlur}
					placeholder={placeholder}
					style={styles.input}
				/>
				<Icon name={isFocused ? 'clear' : 'microphone'} onPress={handleClear} />
			</View>
		</View>
	)
}

export default SearchBar
