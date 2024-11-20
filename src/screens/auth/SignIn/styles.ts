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
	signInText: {
		marginBottom: RH(20),
		fontSize: SIZES.S20,
		color: colors.black500,
		fontWeight: '600',
	},
	signInButton: {
		marginTop: RH(16),
		marginBottom: RH(30),
	},

	forgotText: {
		fontSize: SIZES.S16,
		textTransform: 'uppercase',
		color: colors.black500,
		fontWeight: '600',
	},
	input: {
		marginBottom: RH(8),
	},
	line: {
		width: '100%',
		borderBottomWidth: 1,
		borderBottomColor: colors.black02,
		borderStyle: 'solid',
		marginVertical: RH(50),
	},
	dontHaveAccountText: {
		fontSize: SIZES.S20,
		color: colors.black500,
		fontWeight: '600',
	},
	signUpButton: {
		marginTop: RH(30),
	},
})

export default styles
