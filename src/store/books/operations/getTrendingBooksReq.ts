import type { AppDispatch } from '@/store/types'

import { TBook } from '@/types'
import { removeLoader, setLoader } from '@/store/app'
import httpClient from '@/httpClient'
import { Response } from '@/types/responses'
import { trendingBooksEndpoint } from '../endpoints'
import { updateBooks } from '../'

const getTrendingBooksReq = () => async (dispatch: AppDispatch) => {
	const { endpoint, url } = trendingBooksEndpoint
	dispatch(setLoader(endpoint))

	try {
		const response: Response<TBook[]> = await httpClient.get(url)
		const { data } = response.data

		dispatch(updateBooks({ trendingBooks: data }))
	} catch (e: any) {
		console.debug('ERROR:getTrendingBooksReq', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}

export default getTrendingBooksReq
