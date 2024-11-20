import { StyleSheet } from 'react-native'

const flexBox = StyleSheet.create({
	fl_02: { flex: 0.2 },
	fl_04: { flex: 0.4 },
	fl_06: { flex: 0.6 },
	fl_08: { flex: 0.8 },
	fl_1: { flex: 1 },
	flg_1: { flexGrow: 1 },

	ai_c: { alignItems: 'center' },
	ai_fs: { alignItems: 'flex-start' },
	ai_fe: { alignItems: 'flex-end' },

	ac_sb: { alignContent: 'space-between' },

	as_c: { alignSelf: 'center' },
	as_fe: { alignSelf: 'flex-end' },

	jc_c: { justifyContent: 'center' },
	jc_sb: { justifyContent: 'space-between' },
	jc_sa: { justifyContent: 'space-around' },
	jc_fs: { justifyContent: 'flex-start' },
	jc_fe: { justifyContent: 'flex-end' },
})

export default flexBox
