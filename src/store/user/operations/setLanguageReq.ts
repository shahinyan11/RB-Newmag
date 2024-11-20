import type { AppDispatch } from '@/store/types'
import httpClient from '@/httpClient'
import { removeLoader, setLoader } from '@/store/app'
import { setLanguageEndpoint } from '../endpoints'
import { updateUserState } from '@/store/user'

export const setLanguageReq = (lang: string) => async (dispatch: AppDispatch) => {
	const { endpoint, url } = setLanguageEndpoint
	dispatch(setLoader(endpoint))

	try {
		await httpClient.post(url, { lang })

		dispatch(updateUserState({ language: lang }))
	} catch (e: any) {
		console.debug('ERROR:setLanguageReq', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}
