import { memo } from 'react'
import { Text as RNText, TextProps as RMTextProps, TextStyle } from 'react-native'

import type ChildrenProps from '@/types/Utils/ChildrenProps'
import { SIZES } from '@/constants/SIZES'
import colors from '@/theme/colors'

type TextProps = RMTextProps &
	ChildrenProps & {
		size?: keyof typeof SIZES
		color?: keyof typeof colors
		weight?: TextStyle['fontWeight']
		textAlign?: TextStyle['textAlign']
		lineHeight?: TextStyle['lineHeight']
		style?: TextStyle
	}

function Text({ children, style, ...rest }: TextProps) {
	const color = rest.color ? colors[rest?.color] : style?.color ?? 'black'
	const fontSize = rest.size ? SIZES[rest.size] : style?.fontSize ?? SIZES['S16']
	const fontWeight = rest.weight ?? style?.fontWeight ?? '600'

	return (
		<RNText {...rest} style={[style, { fontWeight, fontSize, color }]}>
			{children}
		</RNText>
	)
}

Text.displayName = 'Text'
export default memo(Text)
