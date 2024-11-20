import { StyleSheet } from 'react-native'
import styles from '@/styles'
import Colors from '@/theme/colors'
import { RH, RW } from '@/theme'

export default StyleSheet.create({
	...styles,

	topContainer: {
		...styles.ai_c,
		...styles.pt_20,
		...styles.pb_48,
	},

	avatarBox: {
		...styles.bgc_black,
		...styles.jc_c,
		...styles.ai_c,
		...styles.mb_14,
		width: RW(50),
		height: RW(50),
		borderRadius: RW(25),
	},

	gradientButton: {
		...styles.ai_c,
		...styles.jc_c,
		width: RW(170),
		height: RH(38),
	},

	sectionTitle: {
		...styles.ph_10,
		...styles.pt_30,
		...styles.pb_18,
		backgroundColor: Colors.gray100,
	},

	bottomContainer: {
		...styles.ph_10,
		backgroundColor: Colors.gray100,
	},

	whiteBox: {
		...styles.ai_c,
		...styles.jc_c,
		...styles.fl_1,
		height: RH(89),
		backgroundColor: Colors.white,
	},

	whiteBoxSelected: {
		borderWidth: 1,
		borderColor: Colors.black,
	},
})
