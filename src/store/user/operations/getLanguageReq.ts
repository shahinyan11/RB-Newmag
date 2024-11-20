import type { AppDispatch } from '@/store/types'
import httpClient from '@/httpClient'
import { removeLoader, setLoader } from '@/store/app'
import { getLanguageEndpoint } from '../endpoints'
import { updateUserState } from '@/store/user'

export const getLanguageReq = () => async (dispatch: AppDispatch) => {
	const { endpoint, url } = getLanguageEndpoint
	dispatch(setLoader(endpoint))

	try {
		const response = await httpClient.post(url)
		const { data } = response.data

		dispatch(updateUserState({ language: data }))
	} catch (e: any) {
		console.debug('ERROR:getLanguageReq', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}
