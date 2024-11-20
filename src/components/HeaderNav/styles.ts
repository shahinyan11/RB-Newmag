import { StyleSheet } from 'react-native'

import { RH, RW } from '@/theme'
import colors from '@/theme/colors'
import { SIZES } from '@/constants/SIZES'

const styles = StyleSheet.create({
	container: {
		height: RH(50),
		paddingTop: RH(3),
		flexDirection: 'row',
		alignItems: 'center',
	},
	iconContainer: {
		marginRight: RW(15),
	},
	redDot: {
		width: RW(14),
		height: RW(14),
		borderRadius: RW(14),
		position: 'absolute',
		left: RW(10),
		bottom: RW(9),
		backgroundColor: colors.red500,
	},
	cartBadge: {
		width: RW(22),
		height: RW(14),
		borderRadius: RW(15),
		position: 'absolute',
		left: RW(10),
		bottom: RW(9),
		backgroundColor: colors.black,
		justifyContent: 'center',
		alignItems: 'center',
	},
	cartBadgeText: {
		fontSize: SIZES.S11,
		fontWeight: '700',
		color: colors.white,
		lineHeight: RW(14),
	},
})

export default styles
