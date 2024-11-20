import { StyleSheet } from 'react-native'

import { BG_HOT_400, BLACK, font, RH, RW, TEXT_ERROR, TEXT_HOT } from '@/theme'

export default StyleSheet.create({
	wrapper: {
		width: '100%',
	},
	container: {
		width: '100%',
		overflow: 'hidden',
		position: 'relative',
		flexDirection: 'row',
		alignItems: 'center',
		height: RH(48),
		borderWidth: RW(1),
		borderRadius: RW(8),
		borderColor: BLACK,
	},

	containerBlur: {
		borderColor: BG_HOT_400,
	},

	label: {
		...font({
			fontSize: 14,
			lineHeight: 22,
			color: TEXT_HOT,
			fontFamily: 'regular',
		}),
		marginBottom: RH(4),
	},

	inputContainer: {
		backgroundColor: 'transparent',
		height: RH(30),
		borderLeftColor: BG_HOT_400,
		borderLeftWidth: 1,
	},
	input: {
		height: RH(48),
		marginRight: 0,
		textAlignVertical: 'center',
		...font({
			color: BLACK,
			fontSize: 14,
			lineHeight: 14,
			fontFamily: 'regular',
		}),
	},

	error: {
		position: 'absolute',
		top: '100%',
		...font({
			fontSize: 13,
			lineHeight: 20,
			color: TEXT_ERROR,
			fontFamily: 'regular',
		}),
		marginTop: 1,
	},
})
