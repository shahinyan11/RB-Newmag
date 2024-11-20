import React from 'react'
import Svg, { Circle, Rect } from 'react-native-svg'

import type { TIcon } from '@/types'

const PauseControlIcon = ({ style, size, color, bgColor }: TIcon) => (
	<Svg style={style} width={size || '60'} height={size || '60'} viewBox="0 0 60 60" fill="none">
		<Circle cx="30" cy="30" r="30" fill={bgColor ?? 'black'} />
		<Rect x="18" y="16" width="7.5" height="28" rx="1" fill={color ?? 'white'} />
		<Rect x="34.5" y="16" width="7.5" height="28" rx="1" fill={color ?? 'white'} />
	</Svg>
)

PauseControlIcon.displayName = 'PauseControlIcon'
export default PauseControlIcon
