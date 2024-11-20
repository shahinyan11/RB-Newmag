import { StyleSheet } from 'react-native'
import Colors from '@/theme/colors'
import styles from '@/styles'
import { RW } from '@/theme'

export default StyleSheet.create({
	...styles,

	container: {
		...styles.pv_20,
		backgroundColor: Colors.gray100,
	},

	listContainer: {
		...styles.flg_1,
		...styles.pv_20,
		...styles.ph_10,
		...styles.gap_56,
		backgroundColor: Colors.white,
	},

	cardContainer: {
		width: RW(168),
	},
})
