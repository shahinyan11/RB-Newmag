import { StyleSheet } from 'react-native'
import styles from '@/styles'
import { RH } from '@/theme'
import colors from '@/theme/colors'

export default StyleSheet.create({
	...styles,

	container: {
		...styles.flg_1,
		...styles.ph_10,
		paddingTop: RH(170),
		backgroundColor: colors.white,
	},
	image: {
		...styles.as_c,
		marginBottom: RH(50),
		height: RH(330),
		resizeMode: 'contain',
	},
	text: {
		...styles.ta_c,
	},
	buttonLabel: {
		textTransform: 'uppercase',
	},
})
