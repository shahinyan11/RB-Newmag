import { StyleSheet } from 'react-native'
import styles from '@/styles'

export default StyleSheet.create({
	...styles,

	container: {
		...styles.row,
		...styles.gap_12,
		...styles.pv_20,
	},
})
