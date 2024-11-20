import React from 'react'
import Svg, { Path } from 'react-native-svg'

import type { TIcon } from '@/types'

const SeekSecondsIcon = ({ style, size, color }: TIcon) => (
	<Svg style={style} width={size || '24'} height={size || '24'} viewBox="0 0 24 24" fill="none">
		<Path
			d="M8 7H13C14.5913 7 16.1174 7.63214 17.2426 8.75736C18.3679 9.88258 19 11.4087 19 13C19 14.5913 18.3679 16.1174 17.2426 17.2426C16.1174 18.3679 14.5913 19 13 19H4V21H13C15.1217 21 17.1566 20.1571 18.6569 18.6569C20.1571 17.1566 21 15.1217 21 13C21 10.8783 20.1571 8.84344 18.6569 7.34315C17.1566 5.84285 15.1217 5 13 5H8V1L2 6L8 11V7Z"
			fill={color ?? '#85919A'}
		/>
	</Svg>
)

SeekSecondsIcon.displayName = 'SeekSecondsIcon'
export default SeekSecondsIcon
