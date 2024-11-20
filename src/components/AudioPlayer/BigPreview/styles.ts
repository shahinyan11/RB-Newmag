import { StyleSheet } from 'react-native'
import styles from '@/styles'
import { RH, RW } from '@/theme'

export default StyleSheet.create({
	...styles,

	header: {
		...styles.mr_a,
		...styles.jc_c,
		height: RH(50),
	},

	image: {
		...styles.br_6,
		...styles.mb_20,
		resizeMode: 'cover',
		height: RW(230),
		width: RW(230),
	},
})
