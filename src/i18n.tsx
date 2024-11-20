import i18n, { t as _t, TOptionsBase } from 'i18next'
import { $Dictionary } from 'i18next/typescript/helpers'
import { initReactI18next } from 'react-i18next'

import * as CONST from '@/constants/CONST'
import { Paths, TLang } from '@/types'
import resources from '@/locale'
import store from '@/store'

type rootLevelKeys = (typeof resources)[TLang]['translation']
export type DepthKeys = Paths<rootLevelKeys, 4>

const languageDetector: any = {
	type: 'languageDetector',
	async: true,
	detect: (cb: any) => cb(CONST.APP_DEFAULT_LANG),
	init: () => null,
	cacheUserLanguage: () => null,
}

i18n.use(languageDetector)
	.use(initReactI18next)
	.init({
		debug: __DEV__,
		fallbackLng: 'en',
		lng: CONST.APP_DEFAULT_LANG,
		compatibilityJSON: 'v3',
		ns: ['translation', 'thermography'],
		resources,
		interpolation: {
			escapeValue: false,
		},
	})

export const t = (key: DepthKeys, options?: TOptionsBase & $Dictionary) => _t(key, options)

let pevLanguage: string | undefined

store.subscribe(() => {
	const currentLanguage = store.getState().user.language

	if (currentLanguage !== pevLanguage) {
		i18n.changeLanguage(currentLanguage)
		pevLanguage = currentLanguage
	}
})

export default i18n
