import React from 'react'
import Svg, { Path } from 'react-native-svg'

import type { TIcon } from '@/types'

const ClearIcon = ({ style, size, color }: TIcon) => (
	<Svg style={style} width={size || '20'} height={size || '20'} viewBox="0 0 20 22" fill="none">
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M10 19C14.4183 19 18 15.4183 18 11C18 6.58172 14.4183 3 10 3C5.58172 3 2 6.58172 2 11C2 15.4183 5.58172 19 10 19ZM6.71486 8.75227C6.42838 8.4658 6.42838 8.00133 6.71486 7.71486C7.00133 7.42838 7.4658 7.42838 7.75227 7.71486L10 9.96259L12.2477 7.71486C12.5342 7.42838 12.9987 7.42838 13.2851 7.71486C13.5716 8.00133 13.5716 8.4658 13.2851 8.75227L11.0374 11L13.2851 13.2477C13.5716 13.5342 13.5716 13.9987 13.2851 14.2851C12.9987 14.5716 12.5342 14.5716 12.2477 14.2851L10 12.0374L7.75227 14.2851C7.4658 14.5716 7.00133 14.5716 6.71486 14.2851C6.42838 13.9987 6.42838 13.5342 6.71486 13.2477L8.96259 11L6.71486 8.75227Z"
			fill={color || 'black'}
		/>
	</Svg>
)

ClearIcon.displayName = 'ClearIcon'
export default ClearIcon
