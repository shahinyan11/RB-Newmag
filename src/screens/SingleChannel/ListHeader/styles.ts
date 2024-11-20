import { StyleSheet } from 'react-native'
import styles from '@/styles'
import { RH } from '@/theme'
import { SCREEN_WIDTH } from '@gorhom/bottom-sheet'

export default StyleSheet.create({
	...styles,

	image: {
		width: SCREEN_WIDTH,
		height: RH(300),
		resizeMode: 'cover',
	},
})
