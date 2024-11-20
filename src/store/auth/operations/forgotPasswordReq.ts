import type { AppDispatch } from '@/store/types'

import { removeLoader, setLoader } from '@/store/app'
import { forgotPasswordEndpoint } from '@/store/auth/endpoints'
import httpClient from '@/httpClient'
import SCREENS from '@/navigation/SCREENS'
import { navigate } from '@/navigation'

export const forgotPasswordReq = (email: string) => async (dispatch: AppDispatch) => {
	const { endpoint, url } = forgotPasswordEndpoint
	dispatch(setLoader(endpoint))

	try {
		await httpClient.post(url, { email })
		navigate(SCREENS.VERIFY_CODE, { email })
	} catch (e: any) {
		console.debug('ERROR:forgotPasswordReq', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}
