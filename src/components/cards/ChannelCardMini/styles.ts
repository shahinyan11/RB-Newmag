import { StyleSheet } from 'react-native'

import { SIZES } from '@/constants/SIZES'
import colors from '@/theme/colors'
import { RH, RW } from '@/theme'

const styles = StyleSheet.create({
	container: {
		width: RW(68),
		gap: RH(10),
		alignItems: 'center',
	},
	image: {
		width: RW(62),
		height: RW(62),
		resizeMode: 'cover',
		borderRadius: RW(2),
	},
	title: {
		fontSize: SIZES.S12,
		color: colors.black,
		fontWeight: '600',
		textAlign: 'center',
	},
})

export default styles
