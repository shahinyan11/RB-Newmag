import type { AppDispatch, GetState } from '@/store/types'

import { removeLoader, setLoader } from '@/store/app'
import { resetPasswordEndpoint } from '@/store/auth/endpoints'
import httpClient from '@/httpClient'
import { navigate } from '@/navigation'
import SCREENS from '@/navigation/SCREENS'

type ResetPasswordReqProps = {
	email: string
	code: string | number
	password: string
}

export const resetPasswordReq =
	(params: ResetPasswordReqProps) => async (dispatch: AppDispatch, getState: GetState) => {
		const { endpoint, url } = resetPasswordEndpoint
		dispatch(setLoader(endpoint))

		try {
			await httpClient.post(url, params)
			navigate(SCREENS.PASSWORD_UPDATED)
		} catch (e: any) {
			console.debug('ERROR:resetPasswordReq', e?.message)
		} finally {
			dispatch(removeLoader(endpoint))
		}
	}
