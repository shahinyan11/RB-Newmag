import React from 'react'
import Svg, { Path } from 'react-native-svg'

import type { TIcon } from '@/types'

const PlayIcon = ({ style, size, color }: TIcon) => (
	<Svg style={style} width={size || '20'} height={size || '20'} viewBox="0 0 20 20" fill="none">
		<Path
			d="M6.46001 4.53335L15.2167 9.64169C15.2794 9.67842 15.3315 9.73094 15.3676 9.79402C15.4038 9.8571 15.4228 9.92855 15.4228 10.0013C15.4228 10.074 15.4038 10.1454 15.3676 10.2085C15.3315 10.2716 15.2794 10.3241 15.2167 10.3609L6.46001 15.4692C6.39657 15.5062 6.32447 15.5258 6.25101 15.526C6.17755 15.5262 6.10536 15.5069 6.04174 15.4702C5.97812 15.4335 5.92533 15.3806 5.88874 15.3169C5.85214 15.2532 5.83303 15.181 5.83335 15.1075V4.89335C5.83333 4.82004 5.85265 4.74802 5.88936 4.68456C5.92608 4.6211 5.97889 4.56845 6.04246 4.53194C6.10603 4.49542 6.17811 4.47632 6.25143 4.47656C6.32474 4.47681 6.39669 4.4964 6.46001 4.53335Z"
			fill={color || 'black'}
		/>
	</Svg>
)

PlayIcon.displayName = 'PlayIcon'
export default PlayIcon
