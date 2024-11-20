import { StyleSheet } from 'react-native'
import colors from '@/theme/colors'
import { RH, RW } from '@/theme'
import styles from '@/styles'

export default StyleSheet.create({
	...styles,
	
	container: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		gap: RW(10),
	},

	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderWidth: 1,
		borderColor: colors.black05,
		gap: RW(10),
		height: RH(48),
		paddingHorizontal: RW(16),
		borderRadius: RW(10),
		marginVertical: RH(10),
	},
	input: {
		flex: 1,
	},
})
