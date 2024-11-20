import React from 'react'
import Svg, { Path } from 'react-native-svg'

import type { TIcon } from '@/types'

const ChevronUpIcon = ({ style, size, color }: TIcon) => (
	<Svg style={style} width={size || '24'} height={size || '24'} viewBox="0 0 24 24" fill="none">
		<Path
			d="M12 8.29688L6 14.2969L7.41 15.7069L12 11.1269L16.59 15.7069L18 14.2969L12 8.29688Z"
			fill={color ?? '#454545'}
		/>
	</Svg>
)

ChevronUpIcon.displayName = 'ChevronUpIcon'
export default ChevronUpIcon
