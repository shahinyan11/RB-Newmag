import { StyleSheet } from 'react-native'
import styles from '@/styles'

export default StyleSheet.create({
	...styles,

	container: {
		...styles.p_10,
		...styles.pt_14,
		...styles.gap_20,
		...styles.bgc_white,
		...styles.mb_20,
	},
})
