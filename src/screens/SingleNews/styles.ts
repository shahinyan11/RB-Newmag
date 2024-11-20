import { StyleSheet } from 'react-native'
import styles from '@/styles'
import { RH, RW } from '@/theme'
import { SCREEN_WIDTH } from '@gorhom/bottom-sheet'

export default StyleSheet.create({
	...styles,

	image: {
		width: SCREEN_WIDTH,
		height: RH(375),
		resizeMode: 'contain',
	},

	absoluteTexts: {
		...styles.gap_6,
		...styles.pos_a,
		bottom: RH(20),
		left: RW(10),
	},
})
