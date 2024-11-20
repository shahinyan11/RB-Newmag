import Colors from '@/theme/colors'

export const APP_NAME = 'newmag'
export const API_URL = 'https://newmag.am/api'
export const APP_ONBOARDING_KEY = '@a_onboarding'
export const APP_DEFAULT_LANG = 'hy'
export const ACTIVE_OPACITY = 0.8
export const THEME = {
	DARK: 'dark',
	LIGHT: 'light',
}
export const DATE_FORMAT = 'YYYY-MM-DD'
export const PAGINATION = {
	page: 1,
	totalPages: undefined,
}

export const BG_SETTINGS = [
	{ id: 1, bgStyle: { backgroundColor: Colors.white }, textStyle: { color: Colors.black } },
	{ id: 2, bgStyle: { backgroundColor: Colors.black }, textStyle: { color: Colors.white } },
]

export const BOOK_TYPES = {
	BOOK: 'book',
	DIGITAL_BOOK: 'digitalBook',
	AUDIOBOOK: 'audioBook',
}

export const APP_LANGUAGES = {
	EN: 'en',
	AM: 'am',
} as const

export const AUDIO_SPEEDS = [
	{ id: 1, label: '1x', value: 1 },
	{ id: 2, label: '2x', value: 2 },
	{ id: 3, label: '3x', value: 3 },
	{ id: 4, label: '4x', value: 4 },
]

export const SOCIAL_LINKS = {
	FACEBOOK: 'https://www.facebook.com/newmagofficial/',
	TWITTER: 'https://x.com/newmagofficial',
	INSTAGRAM: 'https://www.instagram.com/newmag_publishing/',
}
