import React from 'react'
import Svg, { Path } from 'react-native-svg'

import type { TIcon } from '@/types'

const SortIcon = ({ style, size, color }: TIcon) => (
	<Svg style={style} width={size || '24'} height={size || '24'} viewBox="0 0 24 24" fill="none">
		<Path
			d="M11.95 7.95L10.536 9.364L7.99999 6.828V20H5.99999V6.828L3.46499 9.364L2.04999 7.95L6.99999 3L11.95 7.95ZM21.95 16.05L17 21L12.05 16.05L13.464 14.636L16.001 17.172L16 4H18V17.172L20.536 14.636L21.95 16.05Z"
			fill={color ?? 'black'}
		/>
	</Svg>
)

SortIcon.displayName = 'SortIcon'
export default SortIcon
