import { StyleSheet } from 'react-native'

import { RH, RW } from '@/theme'
import colors from '@/theme/colors'
import { SIZES } from '@/constants/SIZES'

const styles = StyleSheet.create({
	container: {
		padding: RW(12),
		backgroundColor: colors.white,
		borderRadius: RW(6),
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27,
		elevation: 10,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	textBig: {
		color: colors.black,
		fontSize: SIZES.S17,
		fontWeight: '600',
		marginBottom: RH(5),
	},
	text: {
		color: colors.black,
		fontSize: SIZES.S13,
		fontWeight: '300',
		marginBottom: RH(7),
		marginRight: RW(40),
	},
	date: {
		color: colors.gray400,
		fontSize: SIZES.S12,
		fontWeight: '600',
	},
	newBadge: {
		fontSize: SIZES.S12,
		fontWeight: '600',
		color: colors.white,
		backgroundColor: colors.green500,
		borderRadius: RW(17),
		paddingVertical: RW(6),
		paddingHorizontal: RW(14),
	},
})

export default styles
