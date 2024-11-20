import { StyleSheet } from 'react-native'
import { RH, RW } from '@/theme'
import colors from '@/theme/colors'
import { SIZES } from '@/constants/SIZES'

const st = StyleSheet.create({
	container: {
		width: '100%',
		paddingHorizontal: RW(10),
		zIndex: 99999,
	},
	content: {
		paddingHorizontal: RW(14),
		borderRadius: RW(4),
		height: RH(36),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	success: {
		backgroundColor: colors.green400,
	},
	error: {
		backgroundColor: colors.red500,
	},
	info: {
		backgroundColor: colors.yellow900,
	},
	text: {
		color: colors.white,
		fontSize: SIZES.S16,
		fontWeight: '600',
	},
})
export default st
