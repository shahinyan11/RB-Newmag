import type { AppDispatch } from '@/store/types'
import { removeLoader, setLoader } from '@/store/app'
import httpClient from '@/httpClient'
import { cartEndpoint } from '../endpoints'
import { updateShoppingState } from '@/store/shopping'
import { Response } from '@/types/responses'
import { TCart } from '@/types'

export const getCartReq = () => async (dispatch: AppDispatch) => {
	const { endpoint, url } = cartEndpoint
	dispatch(setLoader(endpoint))

	try {
		const response: Response<TCart> = await httpClient.post(url)
		const { data } = response.data

		dispatch(updateShoppingState({ cart: data }))
	} catch (e: any) {
		console.debug('ERROR:getCartReq', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}
