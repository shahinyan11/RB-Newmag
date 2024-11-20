import { StyleSheet } from 'react-native'
import { RW } from '@/theme'
import colors from '@/theme/colors'

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	video: {
		width: RW(355),
		height: RW(200),
	},
	playIcon: {
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		width: RW(80),
		height: RW(80),
		borderRadius: RW(80),
		backgroundColor: colors.white07,
	},
})

export default styles
