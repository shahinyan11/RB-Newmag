import { StyleSheet } from 'react-native'
import Colors from '@/theme/colors'
import { RH, RW } from '@/theme'
import styles from '@/styles'

export default StyleSheet.create({
	...styles,

	backgroundContainer: {
		overflow: 'hidden',
		borderTopLeftRadius: RW(10),
		borderTopRightRadius: RW(10),
		shadowColor: '#000',
		shadowOpacity: 0.3,
		shadowRadius: 5,
		elevation: 10,
	},
	indicator: {
		...styles.br_2,
		...styles.as_c,
		...styles.mt_10,
		...styles.mb_26,
		height: 4,
		width: RW(80),
		backgroundColor: Colors.gray500,
	},

	content: {
		...styles.bgc_white,
		...styles.ph_10,
		...styles.mt_10,
		...styles.pb_30,
	},
	title: {
		...styles.mb_24,
		...styles.ta_c,
	},

	optionBox: {
		...styles.ai_c,
		...styles.jc_c,
		...styles.br_4,
		borderWidth: 1,
		borderColor: Colors.gray100,
		width: RW(90),
		height: RH(36),
	},
	selectedBox: {
		borderWidth: 1,
		borderColor: Colors.red500,
	},
})
