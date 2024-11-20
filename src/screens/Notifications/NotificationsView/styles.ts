import { StyleSheet } from 'react-native'

import { SIZES } from '@/constants/SIZES'
import colors from '@/theme/colors'
import { RH, RW } from '@/theme'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: RH(12),
	},
	sectionListContainer: {
		padding: RW(14),
		gap: RH(12),
	},
	sectionTitle: {
		fontSize: SIZES.S12,
		color: colors.gray800,
		fontWeight: '600',
		textAlign: 'center',
		marginBottom: RH(4),
		textTransform: 'uppercase',
	},
})

export default styles
