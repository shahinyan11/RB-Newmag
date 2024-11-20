import type { AppDispatch } from '@/store/types'
import { removeLoader, setLoader, updateAppState } from '@/store/app'
import httpClient from '@/httpClient'
import { Response } from '@/types/responses'
import { TCountry } from '@/types'
import { countriesEndpoint } from '@/store/app/endpoints'

export const getDeliveryCountriesReq = () => async (dispatch: AppDispatch) => {
	const { endpoint, url } = countriesEndpoint
	dispatch(setLoader(endpoint))

	try {
		const response: Response<TCountry[]> = await httpClient.post(url)
		const { data } = response.data

		dispatch(updateAppState({ deliveryCountries: data }))
	} catch (e: any) {
		console.debug('ERROR:getDeliveryCountriesReq', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}
