import React from 'react'
import Svg, { Path } from 'react-native-svg'

import type { TIcon } from '@/types'

const RepeatIcon = ({ style, size, color }: TIcon) => (
	<Svg style={style} width={size || '16'} height={size || '16'} viewBox="0 0 16 16" fill="none">
		<Path
			d="M3.99999 2.66602H14C14.1768 2.66602 14.3464 2.73625 14.4714 2.86128C14.5964 2.9863 14.6667 3.15587 14.6667 3.33268V7.99935H13.3333V3.99935H3.99999V5.99935L0.666656 3.33268L3.99999 0.666016V2.66602ZM12 13.3327H1.99999C1.82318 13.3327 1.65361 13.2624 1.52859 13.1374C1.40356 13.0124 1.33332 12.8428 1.33332 12.666V7.99935H2.66666V11.9993H12V9.99935L15.3333 12.666L12 15.3327V13.3327Z"
			fill={color ?? 'black'}
		/>
	</Svg>
)

RepeatIcon.displayName = 'RepeatIcon'
export default RepeatIcon
