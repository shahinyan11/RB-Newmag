import type { AppDispatch } from '@/store/types'

import { removeLoader, setLoader } from '@/store/app'
import { verifyCodeEndpoint } from '@/store/auth/endpoints'
import httpClient from '@/httpClient'
import SCREENS from '@/navigation/SCREENS'
import { navigate } from '@/navigation'

type VerifyCodeReqParams = {
	email: string
	code: string | number
}

export const verifyCodeReq = (params: VerifyCodeReqParams) => async (dispatch: AppDispatch) => {
	const { endpoint, url } = verifyCodeEndpoint
	dispatch(setLoader(endpoint))

	try {
		await httpClient.post(url, params)
		navigate(SCREENS.ENTER_NEW_PASSWORD, params)
	} catch (e: any) {
		console.debug('ERROR:verifyCodeReq', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}
