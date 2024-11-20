import type { AppDispatch } from '@/store/types'
import httpClient from '@/httpClient'
import { removeLoader, setLoader } from '@/store/app'
import { userInfoEndpoint } from '../endpoints'
import { updateUserState } from '@/store/user'

export const getUserInfoReq = () => async (dispatch: AppDispatch) => {
	const { endpoint, url } = userInfoEndpoint
	dispatch(setLoader(endpoint))

	try {
		const response = await httpClient.post(url)
		const { data } = response.data

		dispatch(updateUserState({ user: data }))
	} catch (e: any) {
		console.debug('ERROR:getUserInfoReq', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}
