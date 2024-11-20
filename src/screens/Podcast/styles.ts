import { StyleSheet } from 'react-native'
import { RH, RW } from '@/theme'
import styles from '@/styles'

export default StyleSheet.create({
	...styles,

	container: {
		flex: 1,
	},
	topContainer: {
		...styles.row,
		...styles.jc_sb,
		...styles.mt_30,
	},

	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	gap34: {
		gap: RW(34),
	},

	bookCard: {
		width: RW(168),
	},
	listContainer: {
		gap: RH(25),
		paddingBottom: RH(30),
		paddingHorizontal: RW(10),
	},
	listColumnWrapper: {
		justifyContent: 'space-between',
	},
})
