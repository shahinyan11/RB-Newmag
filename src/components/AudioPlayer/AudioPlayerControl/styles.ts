import { StyleSheet } from 'react-native'
import styles from '@/styles'
import { RW } from '@/theme'
import colors from '@/theme/colors'

export default StyleSheet.create({
	...styles,

	speedBox: {
		...styles.ai_c,
		...styles.jc_c,
		...styles.as_c,
		width: RW(34),
		height: RW(34),
		borderRadius: RW(32),
		backgroundColor: colors.gray200,
	},
})
