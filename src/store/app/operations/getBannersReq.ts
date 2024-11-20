import type { AppDispatch } from '@/store/types'
import { removeLoader, setLoader, updateAppState } from '@/store/app'
import { bannersEndpoint } from '@/store/app/endpoints'
import httpClient from '@/httpClient'

export const getBannersReq = () => async (dispatch: AppDispatch) => {
	const { endpoint, url } = bannersEndpoint
	dispatch(setLoader(endpoint))

	try {
		const response = await httpClient.post(url)
		const { data } = response.data

		dispatch(updateAppState({ banners: data }))
	} catch (e: any) {
		console.debug('ERROR:getBannersReq', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}
