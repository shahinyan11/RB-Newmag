import type { LoginResponse, Response } from '@/types/responses'
import type { AppDispatch, GetState } from '@/store/types'

import { removeLoader, setLoader } from '@/store/app'
import { loginEndpoint } from '@/store/auth/endpoints'
import httpClient from '@/httpClient'
import { updateAuth } from '@/store/auth'

type LoginRequestParams = {
	email: string
	password: string
}

export const loginReq =
	(params: LoginRequestParams) => async (dispatch: AppDispatch, getState: GetState) => {
		const { endpoint, url } = loginEndpoint
		dispatch(setLoader(endpoint))

		let { fcmToken } = getState().app

		try {
			const response: Response<LoginResponse> = await httpClient.post(url, {
				...params,
				fcm_token: fcmToken,
			})
			const { data } = response.data
			dispatch(updateAuth({ token: data.token }))
		} catch (e: any) {
			console.debug('ERROR:loginReq', e?.message)
		} finally {
			dispatch(removeLoader(endpoint))
		}
	}
