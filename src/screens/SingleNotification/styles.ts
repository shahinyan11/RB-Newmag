import { StyleSheet } from 'react-native'

import { SIZES } from '@/constants/SIZES'
import colors from '@/theme/colors'
import { RH, RW } from '@/theme'
import styles from '@/styles'

export default StyleSheet.create({
	...styles,

	date: {
		fontSize: SIZES.S12,
		color: colors.gray800,
		fontWeight: '600',
		textAlign: 'center',
		textTransform: 'uppercase',
		marginVertical: RH(26),
	},
	title: {
		fontSize: SIZES.S28,
		color: colors.black,
		fontWeight: '600',
		marginBottom: RH(20),
	},
	text: {
		color: colors.black,
		fontSize: SIZES.S13,
		fontWeight: '300',
		marginBottom: RH(20),
	},
	image: {
		height: RW(355),
		resizeMode: 'cover',
		backgroundColor: 'red',
	},
})
