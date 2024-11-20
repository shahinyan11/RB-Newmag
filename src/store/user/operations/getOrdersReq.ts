import type { AppDispatch } from '@/store/types'
import httpClient from '@/httpClient'
import { removeLoader, setLoader } from '@/store/app'
import { ordersEndpoint } from '../endpoints'
import { updateUserState } from '@/store/user'

export const getOrdersReq = () => async (dispatch: AppDispatch) => {
	const { endpoint, url } = ordersEndpoint
	dispatch(setLoader(endpoint))

	try {
		const response = await httpClient.post(url)
		const { data } = response.data

		dispatch(updateUserState({ orders: data }))
	} catch (e: any) {
		console.debug('ERROR:getOrdersReq', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}
