import { StyleSheet } from 'react-native'

import { SIZES } from '@/constants/SIZES'
import colors from '@/theme/colors'
import { font, RH } from '@/theme'
import styles from '@/styles'

export default StyleSheet.create({
	container: {
		...styles.ph_10,
		height: RH(50),
		flexDirection: 'row',
		alignItems: 'center',
	},
	title: {
		flex: 1,
		fontSize: SIZES.S16,
		fontWeight: '600',
		color: colors.black,
		textAlign: 'left',
		marginHorizontal: 15,
	},
	leftView: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	centerView: {
		justifyContent: 'center',
	},
	stepText: {
		...font({ fontSize: 16 }),
	},
})
