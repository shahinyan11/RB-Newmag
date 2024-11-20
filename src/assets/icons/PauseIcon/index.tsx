import React from 'react'
import Svg, { Rect } from 'react-native-svg'

import type { TIcon } from '@/types'

const PauseIcon = ({ style, size, color }: TIcon) => (
	<Svg style={style} width={size || '20'} height={size || '20'} viewBox="0 0 20 20" fill="none">
		<Rect x="5" y="5" width="3.5" height="10" rx="1" fill={color ?? 'white'} />
		<Rect x="11.5" y="5" width="3.5" height="10" rx="1" fill={color ?? 'white'} />
	</Svg>
)

PauseIcon.displayName = 'PauseIcon'
export default PauseIcon
