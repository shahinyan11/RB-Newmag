import type { AppDispatch } from '@/store/types'
import httpClient from '@/httpClient'
import { removeLoader, setLoader } from '@/store/app'
import { setDefaultDeliveryAddressEndpoint } from '../endpoints'
import { updateUserState } from '@/store/user'

export const setDefaultDeliveryAddressReq = (id: string) => async (dispatch: AppDispatch) => {
	const { endpoint, url } = setDefaultDeliveryAddressEndpoint
	dispatch(setLoader(endpoint))

	try {
		const response = await httpClient.post(url, { id })
		const { data } = response.data

		dispatch(updateUserState({ deliveryAddresses: data }))
	} catch (e: any) {
		console.debug('ERROR:setDefaultDeliveryAddressReq', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}
