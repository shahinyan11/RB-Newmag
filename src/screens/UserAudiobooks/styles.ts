import { StyleSheet } from 'react-native'
import Colors from '@/theme/colors'
import styles from '@/styles'

export default StyleSheet.create({
	...styles,

	container: {
		...styles.pv_20,
		backgroundColor: Colors.gray100,
	},

	listContainer: {
		...styles.fl_1,
		...styles.pv_20,
		...styles.ph_10,
		...styles.gap_16,
		backgroundColor: Colors.white,
	},
})
