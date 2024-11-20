import { StyleSheet } from 'react-native'
import styles from '@/styles'

export default StyleSheet.create({
	...styles,

	sectionListContainer: {
		...styles.gap_10,
		...styles.pb_20,
	},
	sectionTitle: {
		...styles.mv_10,
		...styles.ta_c,
		...styles.tt_u,
	},
})
