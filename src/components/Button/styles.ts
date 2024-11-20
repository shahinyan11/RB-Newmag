import { StyleSheet } from 'react-native'

import { RH, RW } from '@/theme'
import { SIZES } from '@/constants/SIZES'
import colors from '@/theme/colors'
import styles from '@/styles'

export default StyleSheet.create({
	...styles,

	container: {
		...styles.width_100,
		...styles.br_6,
		...styles.p_14,
		...styles.row,
		...styles.jc_c,
		...styles.gap_10,
		height: RH(50),
	},
	label: {
		textAlign: 'center',
		fontWeight: '600',
		fontSize: SIZES.S16,
	},

	disabled: {
		opacity: 0.5,
	},

	default: {
		backgroundColor: colors.black,
	},
	defaultLabel: {
		color: colors.white,
	},
	outline: {
		borderWidth: RW(1),
		borderColor: colors.black,
	},
	outlineLabel: {
		color: colors.black,
	},
	primary: {
		// backgroundColor: PRIMARY,
	},
	primaryLabel: {
		//
	},
	danger: {
		backgroundColor: colors.red500,
	},
	dangerLabel: {
		color: colors.white,
	},
	none: {
		backgroundColor: colors.transparent,
	},
	noneLabel: {
		color: colors.black,
	},
})
