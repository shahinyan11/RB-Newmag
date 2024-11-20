import type { AppDispatch } from '@/store/types'

import { removeLoader, setLoader } from '@/store/app'
import httpClient from '@/httpClient'
import { addToCartEndpoint } from '@/store/shopping/endpoints'
import { updateShoppingState } from '@/store/shopping'
import { valueof } from '@/types'
import { BOOK_TYPES } from '@/constants/CONST'
import { navigate } from '@/navigation'
import SCREENS from '@/navigation/SCREENS'

type AddToCartReqParams = {
	id: string
	type: valueof<typeof BOOK_TYPES>
	quantity?: number
}

export const addToCartReq = (params: AddToCartReqParams) => async (dispatch: AppDispatch) => {
	const { endpoint, url } = addToCartEndpoint
	dispatch(setLoader(endpoint))

	try {
		const response = await httpClient.post(url, params)
		const { data } = response.data

		dispatch(updateShoppingState({ cart: data }))
		navigate(SCREENS.CART)
	} catch (e: any) {
		console.debug('ERROR:addToCartReq', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}
