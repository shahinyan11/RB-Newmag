import React, { useMemo } from 'react'
import { TouchableOpacity, ViewStyle } from 'react-native'

import type { TIcon, TIconNames } from '@/types'
import * as CONST from '@/constants/CONST'
import { ICONS } from './ICONS'

type IconProps = TIcon & {
	name: TIconNames
	onPress?: () => void
	containerStyle?: ViewStyle
}

function Icon({ name, onPress, containerStyle, ...rest }: IconProps) {
	const IconSvg = useMemo(() => ICONS[name], [name])

	return (
		<TouchableOpacity
			disabled={rest.disabled}
			activeOpacity={CONST.ACTIVE_OPACITY}
			onPress={onPress}
			hitSlop={5}
			style={containerStyle}
		>
			<IconSvg {...rest} />
		</TouchableOpacity>
	)
}

Icon.displayName = 'Icon'
export default Icon
