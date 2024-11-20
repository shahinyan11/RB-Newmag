import { StyleSheet } from 'react-native'
import { RH, RW } from '@/theme'
import colors from '@/theme/colors'
import styles from '@/styles'

export default StyleSheet.create({
	...styles,

	container: {
		backgroundColor: colors.gray100,
	},
	topContainer: {
		alignItems: 'center',
	},
	image: {
		width: RW(196),
		height: RW(280),
		borderRadius: RW(6),
		marginVertical: RH(22),
	},
	whiteContainer: {
		...styles.pb_25,
		padding: RW(10),
		backgroundColor: colors.white,
		borderTopLeftRadius: RW(20),
		borderTopRightRadius: RW(20),
		gap: RH(20),
	},
	section: {
		borderBottomWidth: 1,
		borderBottomColor: colors.gray400,
		paddingBottom: RH(24),
	},
	infoBox: {
		padding: RW(12),
		gap: RW(8),
		backgroundColor: colors.gray100,
	},
	bgWhite: {
		backgroundColor: colors.white,
	},
	authorBox: {
		borderWidth: 1,
		borderColor: colors.gray100,
		paddingHorizontal: RW(15),
		paddingTop: RW(18),
		paddingBottom: RW(30),
	},
	authorImage: {
		width: RW(90),
		height: RW(90),
		borderWidth: 1,
		borderColor: colors.gray100,
		borderRadius: RW(90),
		position: 'absolute',
		right: RW(10),
		top: -RW(45),
	},
	bookCard: {
		width: RW(168),
	},
	booksContainer: {
		...styles.gap_20,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
	countControl: {
		...styles.row,
		...styles.ph_20,
		...styles.pv_14,
		...styles.bgc_gray100,
		...styles.br_6,
		...styles.gap_18,
	},
})
