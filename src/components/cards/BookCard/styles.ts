import { StyleSheet } from 'react-native'

import { RH, RW } from '@/theme'
import { SIZES } from '@/constants/SIZES'
import colors from '@/theme/colors'

const styles = StyleSheet.create({
	container: {
		width: RW(150),
		gap: RH(5),
	},
	image: {
		width: '100%',
		height: RH(230),
		resizeMode: 'cover',
		borderRadius: RW(6),
	},
	priceLabel: {
		fontSize: SIZES.S16,
		color: colors.gray800,
		fontWeight: '300',
	},
	price: {
		fontSize: SIZES.S16,
		color: colors.red500,
		fontWeight: '600',
	},
	title: {
		fontSize: SIZES.S16,
		color: colors.black500,
		fontWeight: '500',
	},
	author: {
		fontSize: SIZES.S14,
		color: colors.gray800,
		fontWeight: '300',
	},
})

export default styles
