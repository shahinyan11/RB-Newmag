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
	image: {
		marginTop: RH(100),
		marginBottom: RH(60),
		width: '100%',
		resizeMode: 'contain',
	},
	title: {
		marginTop: RH(20),
		marginHorizontal: RW(30),
		fontSize: SIZES.S28,
		color: colors.black500,
		fontWeight: '600',
		textAlign: 'center',
	},
	desc: {
		marginTop: RH(10),
		marginBottom: RH(60),
		fontSize: SIZES.S16,
		color: colors.black200,
		textAlign: 'center',
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
