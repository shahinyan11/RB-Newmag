import { StyleSheet } from 'react-native'
import styles from '@/styles'
import Colors from '@/theme/colors'

export default StyleSheet.create({
	...styles,

	container: {
		...styles.gap_10,
		...styles.pt_20,
		backgroundColor: Colors.gray100,
	},

	sectionTitle: {
		...styles.ph_10,
		...styles.mb_10,
		...styles.ta_c,
	},
})
