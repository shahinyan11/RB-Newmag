import { StyleSheet } from 'react-native'
import styles from '@/styles'
import Colors from '@/theme/colors'

export default StyleSheet.create({
	...styles,

	container: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		...styles.ph_10,
		...styles.height_100,
		...styles.ai_c,
		backgroundColor: Colors.white,
	},

	smallContainer: {
		...styles.ph_0,
		paddingTop: 0,
		height: undefined,
	},

	progressBar: {
		...styles.width_100,
		height: 4,
		backgroundColor: Colors.gray300,
	},
})
