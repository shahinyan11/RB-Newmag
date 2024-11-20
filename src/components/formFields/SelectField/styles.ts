import { StyleSheet } from 'react-native'

import { RH, RW } from '@/theme'
import colors from '@/theme/colors'
import styles from '@/styles'
import { SIZES } from '@/constants/SIZES'

export default StyleSheet.create({
	...styles,

	wrapper: {
		...styles.width_100,
		...styles.br_6,
		...styles.ph_20,
		height: RH(50),
		borderColor: colors.gray800,
		borderWidth: RW(1),
		overflow: 'hidden',
	},

	wrapperContent: {
		...styles.width_100,
		...styles.height_100,
		...styles.bgc_gray100,
		...styles.jc_c,
		...styles.ai_c,
	},

	error: {
		borderColor: colors.red500,
	},
	textError: {
		color: colors.red500,
	},
	container: {
		...styles.width_100,
		...styles.row,
	},
	label: {
		fontSize: SIZES.S12,
		fontWeight: '300',
		fontFamily: 'semiLight',
	},
	input: {
		width: '100%',
		fontSize: SIZES.S16,
		fontFamily: 'semiBold',
		color: colors.black,
		fontWeight: '600',
		padding: 0,
	},
	inputWithLeftIcon: {
		paddingLeft: RW(46),
	},
	inputWithRightIcon: {
		paddingRight: RW(46),
	},
	leftIcon: {
		left: RW(22),
		position: 'absolute',
	},
	rightIcon: {
		right: RW(22),
		position: 'absolute',
	},

	modalContainer: {
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
