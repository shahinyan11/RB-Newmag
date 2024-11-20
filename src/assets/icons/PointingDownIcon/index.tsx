import React from 'react'
import Svg, { Path } from 'react-native-svg'

import type { TIcon } from '@/types'

const PointingDownIcon = ({ style, size, color }: TIcon) => (
	<Svg style={style} width={size || '6'} height={size || '6'} viewBox="0 0 6 6" fill="none">
		<Path
			d="M3.25299 5.49147L5.96116 0.797951C6.07199 0.605198 5.93225 0.364258 5.71058 0.364258L0.289419 0.364258C0.0677538 0.364258 -0.0719919 0.605198 0.0388408 0.797951L2.74701 5.49147C2.86271 5.68423 3.14216 5.68423 3.25299 5.49147Z"
			fill={color || '#1F2F42'}
		/>
	</Svg>
)

PointingDownIcon.displayName = 'PointingDownIcon'
export default PointingDownIcon
