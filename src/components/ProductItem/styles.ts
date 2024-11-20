import { StyleSheet } from 'react-native'
import styles from '@/styles'
import { RH, RW } from '@/theme'
import colors from '@/theme/colors'

export default StyleSheet.create({
	...styles,

	container: {
		...styles.row,
		...styles.ai_fs,
		...styles.gap_20,
	},

	image: {
		...styles.br_2,
		width: RW(105),
		height: RH(145),
		resizeMode: 'cover',
	},

	smallImage: {
		width: RW(107),
		height: RH(107),
	},

	rightContainer: {
		width: RW(188),
		...styles.jc_sb,
		...styles.ai_fs,
		...styles.gap_6,
	},

	blackBubble: {
		...styles.p_6,
		...styles.br_8,
		backgroundColor: colors.black,
	},
})
