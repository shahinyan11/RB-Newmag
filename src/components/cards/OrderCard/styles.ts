import { StyleSheet } from 'react-native'
import colors from '@/theme/colors'
import styles from '@/styles'

export default StyleSheet.create({
	...styles,

	container: {
		...styles.p_10,
		...styles.pt_0,
		backgroundColor: colors.white,
	},

	status: {
		...styles.p_8,
		...styles.br_8,
		...styles.tt_u,
		...styles.mr_a,
	},
})
