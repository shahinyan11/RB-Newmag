import type { AppDispatch } from '@/store/types'
import { removeLoader, setLoader, updateAppState } from '@/store/app'
import { orderingTermsEndpoint } from '@/store/app/endpoints'
import { Response } from '@/types/responses'
import httpClient from '@/httpClient'

export const getOrderingTerms = () => async (dispatch: AppDispatch) => {
	const { endpoint, url } = orderingTermsEndpoint
	dispatch(setLoader(endpoint))

	try {
		const response: Response<string> = await httpClient.post(url)
		const { data } = response.data

		dispatch(updateAppState({ orderingTerms: data }))
	} catch (e: any) {
		console.debug('ERROR:getOrderingTerms', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}
