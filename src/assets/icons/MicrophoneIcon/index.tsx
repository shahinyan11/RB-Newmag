import React from 'react'
import Svg, { Path } from 'react-native-svg'

import type { TIcon } from '@/types'

const MicrophoneIcon = ({ style, size, color }: TIcon) => (
	<Svg style={style} width={size || '20'} height={size || '20'} viewBox="0 0 20 20" fill="none">
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M10 0.5C11.6569 0.5 13 1.84315 13 3.5V10.5C13 12.1569 11.6569 13.5 10 13.5C8.34315 13.5 7 12.1569 7 10.5V3.5C7 1.84315 8.34315 0.5 10 0.5ZM15.25 7C14.8358 7 14.5 7.33579 14.5 7.75V10.5C14.5 12.9853 12.4853 15 10 15C7.51472 15 5.5 12.9853 5.5 10.5V7.75C5.5 7.33579 5.16421 7 4.75 7C4.33579 7 4 7.33579 4 7.75V10.5C4.00148 13.5226 6.25111 16.0722 9.25 16.45V18H7.25C6.83579 18 6.5 18.3358 6.5 18.75C6.5 19.1642 6.83579 19.5 7.25 19.5H12.75C13.1642 19.5 13.5 19.1642 13.5 18.75C13.5 18.3358 13.1642 18 12.75 18H10.75V16.45C13.7489 16.0722 15.9985 13.5226 16 10.5V7.75C16 7.33579 15.6642 7 15.25 7Z"
			fill={color || '#C7C7CC'}
		/>
	</Svg>
)

MicrophoneIcon.displayName = 'MicrophoneIcon'
export default MicrophoneIcon
