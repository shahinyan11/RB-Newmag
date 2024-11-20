import { StyleSheet } from 'react-native'
import { RH } from '@/theme'
import styles from '@/styles'
import colors from '@/theme/colors'

export default StyleSheet.create({
	...styles,

	container: {
		...styles.ph_10,
		paddingTop: RH(95),
		backgroundColor: colors.white,
	},
	image: {
		...styles.as_c,
		marginBottom: RH(30),
		height: RH(215),
		resizeMode: 'contain',
	},
	text: {
		...styles.ta_c,
		marginBottom: RH(70),
	},
	buttonLabel: {
		textTransform: 'uppercase',
	},
})
