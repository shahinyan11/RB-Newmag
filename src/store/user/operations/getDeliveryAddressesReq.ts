import type { AppDispatch } from '@/store/types'
import httpClient from '@/httpClient'
import { removeLoader, setLoader } from '@/store/app'
import { getDeliveryAddressesEndpoint } from '../endpoints'
import { updateUserState } from '@/store/user'

export const getDeliveryAddressesReq = () => async (dispatch: AppDispatch) => {
	const { endpoint, url } = getDeliveryAddressesEndpoint
	dispatch(setLoader(endpoint))

	try {
		const response = await httpClient.post(url)
		const { data } = response.data

		dispatch(updateUserState({ deliveryAddresses: data }))
	} catch (e: any) {
		console.debug('ERROR:getDeliveryAddressReq', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}
