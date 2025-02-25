import React from 'react'
import Svg, { Path } from 'react-native-svg'

import type { TIcon } from '@/types'

const AboutIcon = ({ style, size, color }: TIcon) => (
	<Svg style={style} width={size || '22'} height={size || '22'} viewBox="0 0 22 22" fill="none">
		<Path
			d="M13.75 3.66732H4.58333V18.334H17.4167V7.33398H13.75V3.66732ZM2.75 2.74332C2.75 2.24098 3.15975 1.83398 3.66575 1.83398H14.6667L19.25 6.41732V19.2442C19.2508 19.3646 19.228 19.484 19.1827 19.5955C19.1374 19.7071 19.0706 19.8086 18.9861 19.8943C18.9015 19.98 18.801 20.0482 18.6901 20.0951C18.5792 20.1419 18.4601 20.1665 18.3398 20.1673H3.66025C3.41951 20.1656 3.1891 20.0693 3.01878 19.8992C2.84847 19.729 2.75192 19.4987 2.75 19.258V2.74332ZM10.0833 10.084H11.9167V15.584H10.0833V10.084ZM10.0833 6.41732H11.9167V8.25065H10.0833V6.41732Z"
			fill={color ?? 'black'}
			fillOpacity="0.5"
		/>
	</Svg>
)

AboutIcon.displayName = 'AboutIcon'
export default AboutIcon
