import { StyleSheet } from 'react-native'
import { RH, RW } from '@/theme'
import colors from '@/theme/colors'
import styles from '@/styles'

export default StyleSheet.create({
	...styles,

	container: {
		backgroundColor: colors.gray100,
	},
	header: {
		marginHorizontal: RW(10),
		marginBottom: RH(14),
	},
	topContainer: {
		alignItems: 'center',
		height: RH(375),
		marginBottom: -RH(45),
	},
	image: {
		resizeMode: 'cover',
		borderRadius: RW(6),
	},
	whiteContainer: {
		padding: RW(10),
		backgroundColor: colors.white,
		borderTopLeftRadius: RW(20),
		borderTopRightRadius: RW(20),
		gap: RH(20),
	},
	durationBox: {
		...styles.row,
		...styles.gap_4,
		...styles.p_4,
		...styles.ai_c,
		...styles.br_2,
		backgroundColor: colors.black,
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
})
