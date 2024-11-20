import React from 'react'
import Svg, { Path } from 'react-native-svg'

import type { TIcon } from '@/types'

const HeadphoneIcon = ({ style, size, color }: TIcon) => (
	<Svg style={style} width={size || '22'} height={size || '22'} viewBox="0 0 22 22" fill="none">
		<Path
			d="M11 3.66732C9.05507 3.66732 7.18981 4.43993 5.81455 5.8152C4.43928 7.19047 3.66666 9.05573 3.66666 11.0007H6.41666C6.90289 11.0007 7.36921 11.1938 7.71302 11.5376C8.05684 11.8814 8.24999 12.3478 8.24999 12.834V17.4173C8.24999 17.9035 8.05684 18.3699 7.71302 18.7137C7.36921 19.0575 6.90289 19.2507 6.41666 19.2507H3.66666C3.18043 19.2507 2.71412 19.0575 2.3703 18.7137C2.02648 18.3699 1.83333 17.9035 1.83333 17.4173V11.0007C1.83333 5.9379 5.93724 1.83398 11 1.83398C16.0627 1.83398 20.1667 5.9379 20.1667 11.0007V17.4173C20.1667 17.9035 19.9735 18.3699 19.6297 18.7137C19.2859 19.0575 18.8196 19.2507 18.3333 19.2507H15.5833C15.0971 19.2507 14.6308 19.0575 14.287 18.7137C13.9431 18.3699 13.75 17.9035 13.75 17.4173V12.834C13.75 12.3478 13.9431 11.8814 14.287 11.5376C14.6308 11.1938 15.0971 11.0007 15.5833 11.0007H18.3333C18.3333 9.05573 17.5607 7.19047 16.1854 5.8152C14.8102 4.43993 12.9449 3.66732 11 3.66732ZM3.66666 12.834V17.4173H6.41666V12.834H3.66666ZM15.5833 12.834V17.4173H18.3333V12.834H15.5833Z"
			fill={color ?? 'black'}
			fillOpacity="0.5"
		/>
	</Svg>
)

HeadphoneIcon.displayName = 'HeadphoneIcon'
export default HeadphoneIcon
