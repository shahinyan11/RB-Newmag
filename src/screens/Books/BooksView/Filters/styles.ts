import { StyleSheet } from 'react-native'

import { SIZES } from '@/constants/SIZES'
import colors from '@/theme/colors'
import { RH, RW } from '@/theme'
import styles from '@/styles'

export default StyleSheet.create({
	...styles,

	container: {
		// marginTop: RH(55), TODO - uncomment after activating tabs
		marginBottom: RH(15),
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
