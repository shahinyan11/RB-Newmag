import { StyleSheet } from 'react-native'
import styles from '@/styles'
import Colors from '@/theme/colors'
import { RW } from '@/theme'

export default StyleSheet.create({
	...styles,

	container: {
		...styles.ai_c,
		...styles.jc_c,
		width: RW(34),
		height: RW(34),
		borderRadius: RW(17),
		borderWidth: 1,
		borderColor: Colors.black02,
	},

	inner: {
		width: RW(22),
		height: RW(22),
		borderRadius: RW(11),
		backgroundColor: Colors.black,
	},
})
