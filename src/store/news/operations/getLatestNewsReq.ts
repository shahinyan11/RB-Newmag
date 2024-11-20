import type { AppDispatch } from '@/store/types'

import { removeLoader, setLoader } from '@/store/app'
import httpClient from '@/httpClient'
import { Response } from '@/types/responses'
import { TBook } from '@/types'
import { latestNewsEndpoint } from '../endpoints'
import { updateNewsState } from '../'

export const getLatestNewsReq = () => async (dispatch: AppDispatch) => {
	const { endpoint, url } = latestNewsEndpoint
	dispatch(setLoader(endpoint))

	try {
		const response: Response<TBook[]> = await httpClient.get(url)
		const { data } = response.data

		dispatch(updateNewsState({ latestNews: data }))
	} catch (e: any) {
		console.debug('ERROR:getLatestNewsReq', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}
