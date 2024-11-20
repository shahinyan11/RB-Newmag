import React from 'react'
import Svg, { Path } from 'react-native-svg'

import type { TIcon } from '@/types'

const CloseIcon = ({ style, size, color }: TIcon) => (
	<Svg style={style} width={size || '30'} height={size || '30'} viewBox="0 0 30 30" fill="none">
		<Path
			d="M19.4875 8.75L15 13.2375L10.5125 8.75L8.75 10.5125L13.2375 15L8.75 19.4875L10.5125 21.25L15 16.7625L19.4875 21.25L21.25 19.4875L16.7625 15L21.25 10.5125L19.4875 8.75Z"
			fill={color ?? 'white'}
		/>
	</Svg>
)

CloseIcon.displayName = 'CloseIcon'
export default CloseIcon
