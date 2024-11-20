import type { AppDispatch, GetState } from '@/store/types'

import httpClient from '@/httpClient'
import { Response } from '@/types/responses'
import { TBook } from '@/types'
import { removeLoader, setLoader } from '@/store/app'
import { getNewsByIdEndpoint } from '../endpoints'
import { updateNewsState } from '../'

export const getNewsById = (id: string) => async (dispatch: AppDispatch, getState: GetState) => {
	const { endpoint, url } = getNewsByIdEndpoint(id)
	dispatch(setLoader(endpoint))

	try {
		const response: Response<TBook> = await httpClient.get(url)
		const { data } = response.data
		dispatch(updateNewsState({ currentNews: data }))
	} catch (e: any) {
		console.debug('ERROR:getNewsById', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}
