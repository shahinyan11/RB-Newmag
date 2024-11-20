import { StyleSheet } from 'react-native'
import { RH, RW } from '@/theme'
import colors from '@/theme/colors'
import { SIZES } from '@/constants/SIZES'
import styles from '@/styles'

export default StyleSheet.create({
	...styles,

	topContainer: {
		marginTop: RH(55),
		marginBottom: RH(15),
	},
	listContainer: {
		gap: RH(25),
		paddingBottom: RH(30),
		paddingHorizontal: RW(10),
	},
	title: {
		color: colors.black500,
		fontSize: SIZES.S28,
		fontWeight: '600',
		marginBottom: RH(25),
	},
	filterLabel: {
		color: colors.black500,
		fontSize: SIZES.S18,
		fontWeight: '600',
		marginRight: RW(6),
	},
})

