import React from 'react'
import Svg, { Path } from 'react-native-svg'

import type { TIcon } from '@/types'

const PaymentIcon = ({ style, size, color }: TIcon) => (
	<Svg style={style} width={size || '22'} height={size || '22'} viewBox="0 0 22 22" fill="none">
		<Path
			d="M2.74999 2.75H19.25C19.4931 2.75 19.7263 2.84658 19.8982 3.01849C20.0701 3.19039 20.1667 3.42355 20.1667 3.66667V18.3333C20.1667 18.5764 20.0701 18.8096 19.8982 18.9815C19.7263 19.1534 19.4931 19.25 19.25 19.25H2.74999C2.50688 19.25 2.27372 19.1534 2.10181 18.9815C1.92991 18.8096 1.83333 18.5764 1.83333 18.3333V3.66667C1.83333 3.42355 1.92991 3.19039 2.10181 3.01849C2.27372 2.84658 2.50688 2.75 2.74999 2.75ZM18.3333 11H3.66666V17.4167H18.3333V11ZM18.3333 7.33333V4.58333H3.66666V7.33333H18.3333Z"
			fill={color ?? 'black'}
			fillOpacity="0.5"
		/>
	</Svg>
)

PaymentIcon.displayName = 'PaymentIcon'
export default PaymentIcon
