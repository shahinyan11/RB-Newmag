import { StyleSheet } from 'react-native'
import colors from '@/theme/colors'
import { RH, RW } from '@/theme'
import { SIZES } from '@/constants/SIZES'
import styles from '@/styles'

export default StyleSheet.create({
	...styles,

	container: {
		backgroundColor: 'rgba(0,0,0,0.6)',
	},

	sheetBackground: {
		backgroundColor: 'transparent',
		overflow: 'hidden',
	},
	indicator: {
		backgroundColor: colors.white,
		width: RW(81),
	},

	content: {
		...styles.fl_1,
		...styles.bgc_white,
		...styles.ph_10,
		...styles.mt_16,
		borderTopLeftRadius: RW(10),
		borderTopRightRadius: RW(10),
	},
	title: {
		...styles.mv_20,
		...styles.mb_30,
		textAlign: 'center',
		color: colors.black500,
		fontSize: SIZES.S20,
		fontWeight: '600',
	},

	countyItem: {
		...styles.jc_sb,
		...styles.ai_c,
		...styles.pv_10,
		...styles.row,
	},

	button: {
		marginVertical: RH(14),
	},
})
