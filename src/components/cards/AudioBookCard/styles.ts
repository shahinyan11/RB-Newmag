import { StyleSheet } from 'react-native'

import { RW } from '@/theme'
import { SIZES } from '@/constants/SIZES'
import colors from '@/theme/colors'

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		gap: RW(18),
	},
	leftContainer: {
		width: RW(150),
		height: RW(150),
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		borderRadius: RW(6),
	},
	icon: {
		position: 'absolute',
		left: RW(8),
		bottom: RW(8),
	},
	rightContainer: {
		flex: 1,
		paddingTop: RW(4),
		gap: RW(8),
		alignItems: 'flex-start',
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
	durationContainer: {
		padding: RW(4),
		borderRadius: RW(2),
		flexDirection: 'row',
		backgroundColor: colors.black,
		gap: RW(8),
	},
	durationText: {
		fontSize: SIZES.S14,
		color: colors.white,
		fontWeight: '600',
	},
	priceLabel: {
		fontSize: SIZES.S16,
		color: colors.gray800,
		fontWeight: '300',
	},
	price: {
		fontSize: SIZES.S16,
		color: colors.black,
		fontWeight: '600',
	},
})

export default styles
