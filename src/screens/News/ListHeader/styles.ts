import { StyleSheet } from 'react-native'
import styles from '@/styles'
import { SCREEN_WIDTH } from '@gorhom/bottom-sheet'
import { RH, RW } from '@/theme'

export default StyleSheet.create({
	...styles,

	image: {
		width: SCREEN_WIDTH,
		height: RH(390),
		resizeMode: 'cover',
	},

	absoluteText: {
		...styles.gap_6,
		position: 'absolute',
		bottom: RH(20),
		left: RW(10),
	},

	icon: {
		marginRight: RW(6),
	},
})
