import React from 'react'
import Svg, { Path } from 'react-native-svg'

import type { TIcon } from '@/types'

const ChevronDownIcon = ({ style, size, color }: TIcon) => (
	<Svg style={style} width={size || '24'} height={size || '24'} viewBox="0 0 24 24" fill="none">
		<Path
			d="M16.59 8.29492L12 12.8749L7.41 8.29492L6 9.70492L12 15.7049L18 9.70492L16.59 8.29492Z"
			fill={color ?? '#454545'}
		/>
	</Svg>
)

ChevronDownIcon.displayName = 'ChevronDownIcon'
export default ChevronDownIcon
