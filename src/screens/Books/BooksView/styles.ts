import { StyleSheet } from 'react-native'
import { RH, RW } from '@/theme'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: RH(12),
	},
	bookCard: {
		width: RW(168),
	},
	listContainer: {
		gap: RH(25),
		paddingHorizontal: RW(10),
	},
	listColumnWrapper: {
		justifyContent: 'space-between',
	},
})

export default styles
