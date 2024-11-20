import { StyleSheet } from 'react-native'
import { RH, RW } from '@/theme'
import { SIZES } from '@/constants/SIZES'
import colors from '@/theme/colors'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		paddingHorizontal: RW(10),
	},
	title: {
		marginTop: RH(20),
		marginBottom: RH(195),
		fontSize: SIZES.S28,
		color: colors.black500,
		fontWeight: '600',
	},
	input: {
		marginBottom: RH(4),
	},

	button: {
		marginTop: RH(12),
		marginBottom: RH(20),
	},
	buttonLabel: {
		textTransform: 'uppercase',
	},
})

export default styles
