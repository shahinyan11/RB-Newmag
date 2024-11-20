import React, { useCallback } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

import { RW } from '@/theme'
import Colors from '@/theme/colors'
import Icon from '@/components/Icon'
import styles from './styles'

type CheckboxProps = {
	size?: number
	text?: string
	onPress?: (checked: boolean) => void
	isChecked?: boolean
	hideBorder?: boolean
}

const Checkbox = ({ size = RW(24), text, isChecked, onPress, hideBorder }: CheckboxProps) => {
	const checkedView = useCallback(() => <Icon name="checkArrow" size={20} disabled={true} />, [])

	if (!text) return null

	return (
		<BouncyCheckbox
			size={size}
			text={text}
			onPress={onPress}
			isChecked={isChecked}
			style={styles.container}
			textStyle={styles.text}
			fillColor={hideBorder ? Colors.transparent : Colors.black05}
			innerIconStyle={styles.innerIconStyle}
			ImageComponent={checkedView}
		/>
	)
}

export default Checkbox
