import { Dimensions, PixelRatio, Platform } from 'react-native'

import {
	FONT_WEBLYSLEEK_UI_LIGHT,
	FONT_WEBLYSLEEK_UI_LIGHT_ITALIC,
	FONT_WEBLYSLEEK_UI_SEMI_BOLD,
	FONT_WEBLYSLEEK_UI_SEMI_BOLD_ITALIC,
	FONT_WEBLYSLEEK_UI_SEMI_LIGHT,
	FONT_WEBLYSLEEK_UI_SEMI_LIGHT_ITALIC,
} from './typography'

export const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

export const RatioW = SCREEN_WIDTH / 375
export const RatioH = SCREEN_HEIGHT / 812

export const normalizePixel = (size: number) => {
	const newSize = size * RatioW

	if (Platform.OS === 'ios') {
		return Math.round(PixelRatio.roundToNearestPixel(newSize))
	}

	if (size > 12) return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2

	return Math.round(PixelRatio.roundToNearestPixel(newSize))
}

type TFontFamily = 'semiLight' | 'light' | 'semiBold'
type TFontStyle = 'normal' | 'italic'

const getFontFamily = (fontFamily: TFontFamily, fontStyle: TFontStyle = 'normal') => {
	switch (fontStyle) {
		case 'italic':
			switch (fontFamily) {
				case 'semiLight':
					return FONT_WEBLYSLEEK_UI_SEMI_LIGHT_ITALIC
				case 'light':
					return FONT_WEBLYSLEEK_UI_LIGHT_ITALIC
				case 'semiBold':
					return FONT_WEBLYSLEEK_UI_SEMI_BOLD_ITALIC
				default:
					return FONT_WEBLYSLEEK_UI_LIGHT_ITALIC
			}
		default:
			switch (fontFamily) {
				case 'semiLight':
					return FONT_WEBLYSLEEK_UI_SEMI_LIGHT
				case 'light':
					return FONT_WEBLYSLEEK_UI_LIGHT
				case 'semiBold':
					return FONT_WEBLYSLEEK_UI_SEMI_BOLD
				default:
					return FONT_WEBLYSLEEK_UI_LIGHT
			}
	}
}

interface IFont {
	fontFamily?: TFontFamily
	fontSize?: number
	color?: string
	lineHeight?: number
	fontStyle?: TFontStyle
}

/**
 * Get font style object
 * @param {*} fontFamily: bold | black | light | medium | regular | semiBold
 * @param {*} fontStyle: normal | italic
 * @param {*} fontSize: number
 * @param {*} color: color constant
 * @param {*} lineHeight: number | undefined
 * @returns font style object
 */
export const font = ({
	fontFamily = 'light',
	fontSize = 14,
	color = 'black',
	lineHeight = 18,
	fontStyle = 'normal',
}: IFont) => {
	const style: any = {
		fontStyle,
		fontFamily: getFontFamily(fontFamily),
	}
	if (fontSize !== undefined) {
		style.fontSize = normalizePixel(fontSize)
	}
	if (color !== undefined) {
		style.color = color
	}
	if (lineHeight !== undefined) {
		style.lineHeight = normalizePixel(lineHeight)
	}

	return style
}

export const RW = (value: number) => RatioW * value
export const RH = (value: number) => RatioH * value
