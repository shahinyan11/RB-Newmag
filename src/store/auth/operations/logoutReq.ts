import type { AppDispatch, GetState } from '@/store/types'

import { removeLoader, setLoader } from '@/store/app'
import { logoutEndpoint } from '@/store/auth/endpoints'
import { updateAuth } from '@/store/auth'
import httpClient from '@/httpClient'

export const logoutReq = () => async (dispatch: AppDispatch, getState: GetState) => {
	const { endpoint, url } = logoutEndpoint
	dispatch(setLoader(endpoint))

	const { token } = getState().auth
	try {
		await httpClient.post(url, { token })
		dispatch(updateAuth({ token: undefined }))
	} catch (e: any) {
		console.debug('ERROR:logoutReq', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}
