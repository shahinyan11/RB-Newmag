import { StyleSheet } from 'react-native'
import { RH, RW } from '@/theme'
import { SIZES } from '@/constants/SIZES'
import colors from '@/theme/colors'
import styles from '@/styles'

export default StyleSheet.create({
	...styles,

	container: {
		...styles.gap_30,
		...styles.ph_10,
		paddingBottom: RH(60),
	},
	promotionImage: {
		width: '100%',
		height: RH(130),
		resizeMode: 'cover',
		borderRadius: RW(6),
	},
	section: {
		gap: RH(20),
	},
	sectionHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: RW(4),
	},
	sectionName: {
		fontSize: SIZES.S20,
		color: colors.black500,
		fontWeight: '600',
		textTransform: 'capitalize',
	},
	sectionIcon: {
		marginRight: RW(4),
	},
	flatListContentContainer: {
		gap: 14,
	},
	buttonLabel: {
		marginLeft: RW(10),
		textTransform: 'uppercase',
	},
	textSecondary: {
		marginTop: RH(10),
		fontSize: SIZES.S14,
		color: colors.gray800,
		fontWeight: '600',
		textTransform: 'capitalize',
	},
})
