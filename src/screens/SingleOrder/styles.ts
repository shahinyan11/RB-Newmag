import { StyleSheet } from 'react-native'
import styles from '@/styles'
import Colors from '@/theme/colors'

export default StyleSheet.create({
	...styles,

	container: {
		backgroundColor: Colors.gray100,
	},

	sectionTitle: {
		...styles.ph_10,
		...styles.pv_20,
		...styles.ta_c,
	},

	whiteContainer: {
		backgroundColor: Colors.white,
	},

	infoBlock: {
		...styles.row,
		...styles.ai_fs,
		...styles.gap_10,
		...styles.p_10,
		...styles.mv_10,
		backgroundColor: Colors.white,
	},
})
