import React, { FC, useCallback, useState } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

import styles from './styles'
import Pressable from '@/components/Pressable'

type RoundCheckboxProps = {
	containerStyle?: StyleProp<ViewStyle>
	onToggle?: (value?: boolean) => void
	externalChecked?: boolean
}

const RoundCheckbox: FC<RoundCheckboxProps> = ({ containerStyle, onToggle, externalChecked }) => {
	const [isChecked, setIsChecked] = useState<boolean>(false)

	const handlePress = useCallback(() => {
		onToggle?.(!externalChecked ?? !isChecked)

		setIsChecked(!isChecked)
	}, [isChecked, onToggle])

	return (
		<Pressable style={[styles.container, containerStyle]} onPress={handlePress}>
			{(externalChecked ?? isChecked) && <View style={styles.inner} />}
		</Pressable>
	)
}

RoundCheckbox.displayName = 'RoundCheckbox'
export default RoundCheckbox
