import { StyleSheet } from 'react-native'
import colors from '@/theme/colors'
import { RH, RW } from '@/theme'
import { SIZES } from '@/constants/SIZES'

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'rgba(0,0,0,0.6)',
	},

	sheetBackground: {
		backgroundColor: 'transparent',
		overflow: 'hidden',
	},
	indicator: {
		backgroundColor: colors.white,
		width: RW(81),
	},

	content: {
		flex: 1,
		backgroundColor: colors.white,
		paddingHorizontal: RW(10),
		marginTop: RH(15),
		borderTopLeftRadius: RW(10),
		borderTopRightRadius: RW(10),
	},
	title: {
		textAlign: 'center',
		color: colors.black500,
		fontSize: SIZES.S20,
		fontWeight: '600',
		marginVertical: RH(30),
	},

	button: {
		marginVertical: RH(14),
	},
})

export default styles
