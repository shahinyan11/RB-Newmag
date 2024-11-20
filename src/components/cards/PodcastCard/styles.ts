import { StyleSheet } from 'react-native'

import { RW } from '@/theme'
import colors from '@/theme/colors'

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: colors.white,
		borderRadius: RW(6),
		padding: RW(10),
		paddingRight: RW(20),
		gap: RW(10),

		shadowColor: colors.black,
		shadowOpacity: 0.1,
		shadowOffset: { width: 6, height: 22 },
		shadowRadius: 5,
		elevation: 5,
	},

	image: {
		width: RW(70),
		height: RW(70),
		resizeMode: 'cover',
		borderRadius: RW(6),
	},

	centerContainer: {
		flex: 1,
		paddingTop: RW(4),
		gap: RW(8),
		alignItems: 'flex-start',
	},

	dateContainer: {
		flexDirection: 'row',
		gap: RW(6),
	},
})

export default styles
