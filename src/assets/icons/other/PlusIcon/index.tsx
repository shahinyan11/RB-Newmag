import React from 'react'
import Svg, { Path } from 'react-native-svg'

import type { TIcon } from '@/types'

const PlusIcon = ({ style, size, color }: TIcon) => (
	<Svg style={style} width={size || '24'} height={size || '24'} viewBox="0 0 24 24" fill="none">
		<Path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill={color ?? 'black'} />
	</Svg>
)

PlusIcon.displayName = 'PlusIcon'
export default PlusIcon
