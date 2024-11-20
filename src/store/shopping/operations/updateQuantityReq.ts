import type { AppDispatch } from '@/store/types'
import { removeLoader, setLoader } from '@/store/app'
import httpClient from '@/httpClient'
import { updateShoppingState } from '@/store/shopping'
import { updateQuantityEndpoint } from '@/store/shopping/endpoints'

type UpdateQuantityReqParams = {
	id: string
	type: string
	quantity: number
}

export const updateQuantityReq =
	(params: UpdateQuantityReqParams) => async (dispatch: AppDispatch) => {
		const { endpoint, url } = updateQuantityEndpoint
		dispatch(setLoader(endpoint))

		try {
			const response = await httpClient.post(url, params)
			const { data } = response.data

			dispatch(updateShoppingState({ cart: data }))
		} catch (e: any) {
			console.debug('ERROR: updateQuantityReq ', e?.message)
		} finally {
			dispatch(removeLoader(endpoint))
		}
	}
