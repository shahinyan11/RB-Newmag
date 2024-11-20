import type { RegisterResponse, Response } from '@/types/responses'
import type { AppDispatch, GetState } from '@/store/types'

import { registerEndpoint } from '@/store/auth/endpoints'
import { removeLoader, setLoader } from '@/store/app'
import { updateAuth } from '@/store/auth'
import httpClient from '@/httpClient'

type RegisterRequestParams = {
	first_name: string
	last_name: string
	email: string
	phone: string
	password: string
}

export const registerReq =
	(params: RegisterRequestParams) => async (dispatch: AppDispatch, getState: GetState) => {
		const { endpoint, url } = registerEndpoint
		dispatch(setLoader(endpoint))

		let { fcmToken } = getState().app

		try {
			const response: Response<RegisterResponse> = await httpClient.post(url, {
				...params,
				fcm_token: fcmToken,
			})
			const { data } = response.data
			dispatch(updateAuth({ token: data.token }))
		} catch (e: any) {
			console.debug('ERROR: registerReq ', e?.message)
		} finally {
			dispatch(removeLoader(endpoint))
		}
	}
