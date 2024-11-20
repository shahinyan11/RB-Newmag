import { StyleSheet } from 'react-native'

import { RH, RW } from '@/theme'
import styles from '@/styles'

export default StyleSheet.create({
	...styles,

	container: {
		width: '100%',
		gap: RH(12),
	},
	image: {
		width: '100%',
		height: RH(250),
		resizeMode: 'cover',
		borderRadius: RW(6),
	},
})
