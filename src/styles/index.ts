import { StyleSheet } from 'react-native'
import spacings from './spacings'
import flexBox from './flexBox'
import backgrounds from './backgrounds'
import { RW } from '@/theme'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@gorhom/bottom-sheet'
import Colors from '@/theme/colors'

const styles = StyleSheet.create({
	...spacings,
	...flexBox,
	...backgrounds,

	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	br_0: { borderRadius: 0 },
	br_2: { borderRadius: RW(2) },
	br_4: { borderRadius: RW(4) },
	br_6: { borderRadius: RW(6) },
	br_8: { borderRadius: RW(8) },
	br_10: { borderRadius: RW(10) },

	width_100: { width: '100%', maxWidth: '100%' },
	height_100: { height: '100%', maxHeight: '100%' },
	fullWidth: { width: SCREEN_WIDTH },
	fullHeight: { height: SCREEN_HEIGHT },

	rotateY_180: { transform: [{ rotateY: '180deg' }] },

	zi_9: { zIndex: 9 },
	zi_99: { zIndex: 99 },
	zi_999: { zIndex: 999 },
	zi_9999: { zIndex: 9999 },
	zi_99999: { zIndex: 99999 },

	line_v: {
		height: '100%',
		width: 1,
		backgroundColor: Colors.black02,
	},
	line_h: {
		height: 1,
		backgroundColor: Colors.black02,
	},

	ta_c: { textAlign: 'center' },
	tt_u: { textTransform: 'uppercase' },
	tt_c: { textTransform: 'capitalize' },

	pos_a: { position: 'absolute' },

	ctr_modal: {
		margin: 0,
		width: SCREEN_WIDTH,
	},
})

export default styles
