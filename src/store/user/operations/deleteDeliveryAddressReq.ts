import type { AppDispatch } from '@/store/types'
import httpClient from '@/httpClient'
import { removeLoader, setLoader } from '@/store/app'
import { updateUserState } from '@/store/user'
import { deleteDeliveryAddressEndpoint } from '../endpoints'
import { navigate } from '@/navigation'
import SCREENS from '@/navigation/SCREENS'

export const deleteDeliveryAddressReq = (id: string) => async (dispatch: AppDispatch) => {
	const { endpoint, url } = deleteDeliveryAddressEndpoint
	dispatch(setLoader(endpoint))

	try {
		const response = await httpClient.post(url, { id })
		const { data } = response.data

		dispatch(updateUserState({ deliveryAddresses: data }))
		navigate(SCREENS.DELIVERY_ADDRESSES)
	} catch (e: any) {
		console.debug('ERROR:deleteDeliveryAddressReq', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}
