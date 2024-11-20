import { StyleSheet } from 'react-native'
import styles from '@/styles'
import { RH } from '@/theme'

export default StyleSheet.create({
	...styles,

	sectionTitle: {
		...styles.pt_30,
		...styles.pb_20,
		...styles.ml_10,
	},

	productsContainer: {
		...styles.bgc_white,
		...styles.pv_20,
		...styles.ph_10,
		...styles.gap_20,
	},

	image: {
		height: RH(30),
		minWidth: RH(45),
		resizeMode: 'contain',
	},
})
