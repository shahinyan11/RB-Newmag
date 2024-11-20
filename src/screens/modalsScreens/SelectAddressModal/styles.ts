import { StyleSheet } from 'react-native'
import colors from '@/theme/colors'
import Colors from '@/theme/colors'
import { RH, RW } from '@/theme'
import { SIZES } from '@/constants/SIZES'
import styles from '@/styles'

export default StyleSheet.create({
	...styles,

	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
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
		...styles.ph_20,
		backgroundColor: Colors.white,
		borderTopRightRadius: RW(10),
		borderTopLeftRadius: RW(10),
	},
	sheetBackground: {
		backgroundColor: 'transparent',
		overflow: 'hidden',
	},

	title: {
		textAlign: 'center',
		color: colors.black500,
		fontSize: SIZES.S20,
		fontWeight: '600',
		marginVertical: RH(30),
	},

	button: {
		marginVertical: RH(14),
	},
})
