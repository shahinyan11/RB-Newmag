import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

import type { TIcon } from '@/types'

const PlayControlIcon = ({ style, size, color, bgColor }: TIcon) => (
	<Svg style={style} width={size || '60'} height={size || '60'} viewBox="0 0 60 60" fill="none">
		<Circle cx="30" cy="30" r="30" fill={bgColor ?? 'black'} />
		<Path
			d="M22.92 19.0648L40.4333 29.2814C40.5588 29.3549 40.6629 29.4599 40.7352 29.5861C40.8076 29.7123 40.8456 29.8552 40.8456 30.0006C40.8456 30.146 40.8076 30.2889 40.7352 30.4151C40.6629 30.5412 40.5588 30.6463 40.4333 30.7198L22.92 40.9364C22.7931 41.0105 22.6489 41.0496 22.502 41.05C22.355 41.0504 22.2107 41.0119 22.0834 40.9384C21.9562 40.865 21.8506 40.7592 21.7774 40.6318C21.7042 40.5045 21.666 40.36 21.6666 40.2131V19.7848C21.6666 19.6381 21.7052 19.4941 21.7787 19.3672C21.8521 19.2402 21.9577 19.135 22.0849 19.0619C22.212 18.9889 22.3562 18.9507 22.5028 18.9512C22.6494 18.9517 22.7933 18.9909 22.92 19.0648Z"
			fill={color ?? 'white'}
		/>
	</Svg>
)

PlayControlIcon.displayName = 'PlayControlIcon'
export default PlayControlIcon
