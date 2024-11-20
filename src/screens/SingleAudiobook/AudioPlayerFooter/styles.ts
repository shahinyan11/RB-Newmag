import { StyleSheet } from 'react-native'
import styles from '@/styles'

export default StyleSheet.create({
	...styles,

	buttonsContainer: {
		...styles.ph_10,
		...styles.row,
		...styles.mt_a,
		...styles.mb_14,
		...styles.fullWidth,
		...styles.gap_16,
	},
})
