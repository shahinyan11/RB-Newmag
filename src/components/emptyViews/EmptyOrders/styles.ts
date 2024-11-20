import { StyleSheet } from 'react-native'
import { RH } from '@/theme'
import styles from '@/styles'
import colors from '@/theme/colors'

export default StyleSheet.create({
	...styles,

	container: {
		...styles.ph_10,
		paddingTop: RH(100),
		gap: RH(20),
		backgroundColor: colors.white,
	},
	image: {
		...styles.as_c,
		marginBottom: RH(40),
		height: RH(240),
		resizeMode: 'contain',
	},
	text: {
		...styles.ta_c,
		marginBottom: RH(75),
	},
	buttonLabel: {
		textTransform: 'uppercase',
	},
})
