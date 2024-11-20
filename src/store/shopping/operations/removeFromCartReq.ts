import type { AppDispatch } from '@/store/types'

import { removeLoader, setLoader } from '@/store/app'
import httpClient from '@/httpClient'
import { removeFromCartEndpoint } from '@/store/shopping/endpoints'
import { updateShoppingState } from '@/store/shopping'

type RemoveFromCartReqParams = {
	id?: string
	type?: string
}

export const removeFromCartReq =
	(params: RemoveFromCartReqParams) => async (dispatch: AppDispatch) => {
		const { endpoint, url } = removeFromCartEndpoint
		dispatch(setLoader(endpoint))

		try {
			const response = await httpClient.post(url, params)
			const { data } = response.data

			dispatch(updateShoppingState({ cart: data }))
		} catch (e: any) {
			console.debug('ERROR:removeFromCartReq', e?.message)
		} finally {
			dispatch(removeLoader(endpoint))
		}
	}
