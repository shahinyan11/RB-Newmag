import { StyleSheet } from 'react-native'
import styles from '@/styles'
import { RH } from '@/theme'
import Colors from '@/theme/colors'

export default StyleSheet.create({
	...styles,

	container: {
		...styles.jc_sb,
		backgroundColor: Colors.gray100,
	},

	topContainer: {
		...styles.ai_c,
		...styles.jc_c,
		...styles.gap_10,
		height: RH(140),
	},

	textContainer: {
		...styles.gap_20,
		...styles.p_10,
		...styles.pb_25,
		backgroundColor: Colors.white,
	},

	bottomContainer: {
		...styles.ph_10,
		...styles.pv_16,
		backgroundColor: Colors.white,
	},
	gradientButton: {
		...styles.jc_c,
		...styles.ai_c,

		width: '100%',
		height: RH(50),
	},
})
