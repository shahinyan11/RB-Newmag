import type { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs'

import colors from '@/theme/colors'
import { SIZES } from '@/constants/SIZES'
import { RH } from '@/theme'

const topTabNavigationOptions: MaterialTopTabNavigationOptions = {
	lazy: true,
	tabBarActiveTintColor: colors.black,
	tabBarInactiveTintColor: colors.gray800,
	tabBarIndicatorStyle: { backgroundColor: colors.black },
	tabBarLabelStyle: {
		fontSize: SIZES.S16,
		fontWeight: '600',
	},
	tabBarItemStyle: {
		alignItems: 'center',
	},
	tabBarStyle: {
		height: RH(48),
		justifyContent: 'center',
	},
}

export default topTabNavigationOptions
