import * as CONST from '@/constants/CONST'
import darkTheme from './themes/dark'
import lightTheme from './themes/light'

export * from './typography'
export * from './utils'

const themes = {
	[CONST.THEME.DARK]: darkTheme,
	[CONST.THEME.LIGHT]: lightTheme,
}

export default themes
