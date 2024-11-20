import { StyleSheet } from 'react-native'
import { RH, RW } from '@/theme'
import { SIZES } from '@/constants/SIZES'
import colors from '@/theme/colors'
import styles from '@/styles'

export default StyleSheet.create({
	...styles,
	container: {
		alignItems: 'center',
		paddingHorizontal: RW(10),
	},
	title: {
		marginTop: RH(20),
		marginBottom: RH(75),
		fontSize: SIZES.S28,
		color: colors.black500,
		fontWeight: '600',
	},
	input: {
		marginBottom: RH(4),
	},

	button: {
		marginTop: RH(12),
		marginBottom: RH(20),
	},
})
