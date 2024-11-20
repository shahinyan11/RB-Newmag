import { StyleSheet } from 'react-native'

import { RH, RW } from '@/theme'
import styles from '@/styles'
import colors from '@/theme/colors'

export default StyleSheet.create({
	...styles,

	container: {
		width: RW(168),
		gap: RH(5),
	},
	image: {
		width: '100%',
		height: RW(168),
		borderRadius: RW(6),
		resizeMode: 'cover',
	},
	dot: {
		width: RW(6),
		height: RW(6),
		borderRadius: RW(3),
		backgroundColor: colors.gray800,
		opacity: 0.5,
	},
})
