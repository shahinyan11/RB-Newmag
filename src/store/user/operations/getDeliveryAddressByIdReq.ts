import type { AppDispatch } from '@/store/types'
import httpClient from '@/httpClient'
import { removeLoader, setLoader } from '@/store/app'
import { getDeliveryAddressByIdEndpoint } from '../endpoints'
import { updateUserState } from '@/store/user'

export const getDeliveryAddressByIdReq = (id: string) => async (dispatch: AppDispatch) => {
	const { endpoint, url } = getDeliveryAddressByIdEndpoint(id)
	dispatch(setLoader(endpoint))

	try {
		const response = await httpClient.post(url)
		const { data } = response.data

		dispatch(updateUserState({ deliveryAddresses: data }))
	} catch (e: any) {
		console.debug('ERROR:getDeliveryAddressByIdReq', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}
