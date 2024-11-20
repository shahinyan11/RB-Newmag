import type { AppDispatch } from '@/store/types'
import { removeLoader, setLoader, updateAppState } from '@/store/app'
import { paymentMethodsEndpoint } from '@/store/app/endpoints'
import httpClient from '@/httpClient'

export const getPaymentMethodsReq = () => async (dispatch: AppDispatch) => {
	const { endpoint, url } = paymentMethodsEndpoint
	dispatch(setLoader(endpoint))

	try {
		const response = await httpClient.post(url)
		const { data } = response.data

		dispatch(updateAppState({ paymentMethods: data }))
	} catch (e: any) {
		console.debug('ERROR:getPaymentMethodsReq', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}
