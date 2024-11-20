import type { AppDispatch, GetState } from '@/store/types'

import { TAuthor } from '@/types'
import { removeLoader, setLoader } from '@/store/app'
import httpClient from '@/httpClient'
import { Response } from '@/types/responses'
import { authorsEndpoint } from '../endpoints'
import { updateBooks } from '@/store/books'

const getAuthorsReq = () => async (dispatch: AppDispatch, getState: GetState) => {
	const { endpoint, url } = authorsEndpoint
	dispatch(setLoader(endpoint))

	try {
		const response: Response<TAuthor[]> = await httpClient.post(url)

		const { data } = response.data
		dispatch(updateBooks({ authors: data }))
	} catch (e: any) {
		console.debug('ERROR:getAuthorsReq', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}

export default getAuthorsReq
