import { StyleSheet } from 'react-native'

import colors from '@/theme/colors'
import { SIZES } from '@/constants/SIZES'
import { RH, RW } from '@/theme'

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		transform: [{ rotateZ: '180deg' }],
		alignItems: 'center',
		paddingVertical: RH(10),
		borderTopWidth: 1,
		borderTopColor: colors.gray100,
	},
	innerIconStyle: {
		backgroundColor: colors.white,
		transform: [{ rotateZ: '180deg' }],
		borderRadius: RW(2),
	},
	text: {
		textDecorationLine: 'none',
		fontSize: SIZES.S16,
		color: colors.black,
		fontWeight: '600',
		transform: [{ rotateZ: '180deg' }],
	},
})

export default styles
