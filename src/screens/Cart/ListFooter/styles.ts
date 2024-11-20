import { StyleSheet } from 'react-native'
import styles from '@/styles'

export default StyleSheet.create({
	...styles,

	sectionTitle: {
		...styles.pt_20,
		...styles.pb_20,
		...styles.ml_10,
	},

	deliveryContainer: {
		...styles.bgc_white,
		...styles.ph_10,
		...styles.pb_30,
		...styles.gap_20,
		...styles.mb_16,
	},
})
