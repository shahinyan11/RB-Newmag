import { StyleSheet } from 'react-native'
import { SIZES } from '@/constants/SIZES'
import colors from '@/theme/colors'
import { RH } from '@/theme'

const st = StyleSheet.create({
	containerStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: RH(48),
		borderTopWidth: 0.5,
		borderTopColor: colors.black02,
	},
	iconContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: colors.black,
		fontSize: SIZES.S12,
		fontWeight: '600',
	},
})

export default st
