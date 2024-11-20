import { StyleSheet } from 'react-native'
import styles from '@/styles'
import { RW } from '@/theme'
import colors from '@/theme/colors'

export default StyleSheet.create({
	...styles,

	container: {
		...styles.width_100,
		...styles.row,
		...styles.gap_6,
		borderBottomWidth: 1,
		borderBottomColor: colors.gray300,
	},

	image: {
		resizeMode: 'cover',
		height: RW(63),
		width: RW(63),
	},
})
