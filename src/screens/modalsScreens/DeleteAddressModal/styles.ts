import { StyleSheet } from 'react-native'
import colors from '@/theme/colors'
import Colors from '@/theme/colors'
import { RW } from '@/theme'
import styles from '@/styles'

export default StyleSheet.create({
	...styles,

	container: {
		...styles.fl_1,
		...styles.jc_fe,
	},
	indicator: {
		...styles.as_c,
		...styles.mb_16,
		backgroundColor: colors.white,
		borderRadius: 2,
		width: RW(81),
		height: 4,
	},
	content: {
		...styles.ph_10,
		...styles.pt_40,
		...styles.pb_30,
		backgroundColor: Colors.white,
		borderTopRightRadius: RW(10),
		borderTopLeftRadius: RW(10),
	},
	sheetBackground: {
		backgroundColor: 'transparent',
		overflow: 'hidden',
	},

	title: {
		...styles.tt_u,
		...styles.ta_c,
		...styles.mb_30,
	},
})
