import type { AppDispatch } from '@/store/types'
import httpClient from '@/httpClient'
import { removeLoader, setLoader } from '@/store/app'
import { addDeliveryAddressEndpoint } from '../endpoints'
import { updateUserState } from '@/store/user'
import { TAddress } from '@/types'
import { navigate } from '@/navigation'
import SCREENS from '@/navigation/SCREENS'

type addDeliveryAddressReqParams = Partial<TAddress>

export const addDeliveryAddressReq =
	(params: addDeliveryAddressReqParams) => async (dispatch: AppDispatch) => {
		const { endpoint, url } = addDeliveryAddressEndpoint
		dispatch(setLoader(endpoint))

		try {
			const response = await httpClient.post(url, params)
			const { data } = response.data

			dispatch(updateUserState({ deliveryAddresses: data }))
			navigate(SCREENS.DELIVERY_ADDRESSES)
		} catch (e: any) {
			console.debug('ERROR:addDeliveryAddressReq', e?.message)
		} finally {
			dispatch(removeLoader(endpoint))
		}
	}
