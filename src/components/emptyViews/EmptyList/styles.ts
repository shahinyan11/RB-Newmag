import { StyleSheet } from 'react-native'
import { SIZES } from '@/constants/SIZES'
import { RH } from '@/theme'

const styles = StyleSheet.create({
	container: {
		gap: RH(20),
	},
	text: {
		textAlign: 'center',
		fontSize: SIZES.S17,
		fontWeight: '600',
	},
	buttonLabel: {
		textTransform: 'uppercase',
	},
})

export default styles
