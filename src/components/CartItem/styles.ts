import { StyleSheet } from 'react-native'
import styles from '@/styles'
import Colors from '@/theme/colors'

export default StyleSheet.create({
	...styles,

	container: {
		...styles.p_10,
		...styles.pt_16,
		...styles.bgc_white,
	},

	productItemContainer: {
		...styles.pv_20,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderTopColor: Colors.black01,
		borderBottomColor: Colors.black01,
	},

	bottomContainer: {
		...styles.row,
		...styles.jc_sb,
		...styles.pt_10,
	},

	countControl: {
		...styles.row,
		...styles.ph_20,
		...styles.pv_14,
		...styles.bgc_gray100,
		...styles.br_6,
		...styles.gap_18,
	},
})
