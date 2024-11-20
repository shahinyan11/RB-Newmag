import React, { FC, useCallback } from 'react'
import { StyleProp, TouchableWithoutFeedback, View, ViewStyle } from 'react-native'

import styles from './styles'
import Text from '@/components/Text'
import { useField } from 'formik'

type SelectFieldProps = {
	containerStyle?: StyleProp<ViewStyle>
	name: string
	placeholder?: string
	onPress: () => void
}

const SelectField: FC<SelectFieldProps> = ({ name, placeholder, containerStyle, onPress }) => {
	const [field, meta, helper] = useField(name)
	const { value, touched, error } = meta

	const handlePress = useCallback(() => {
		onPress()
		helper.setTouched(false)
	}, [onPress])

	const showError = touched && !!error

	return (
		<View style={[styles.wrapper, showError && styles.error, containerStyle]}>
			<TouchableWithoutFeedback onPress={handlePress}>
				<View style={[styles.width_100, styles.height_100, styles.jc_c]}>
					<View style={styles.container}>
						<Text color={value?.name ? 'black' : 'gray800'}>
							{value?.name || placeholder}
						</Text>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</View>
	)
}

export default SelectField
