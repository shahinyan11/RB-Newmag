import type { AppDispatch, GetState } from '@/store/types'

import httpClient from '@/httpClient'
import { Response } from '@/types/responses'
import { TBook } from '@/types'
import { removeLoader, setLoader } from '@/store/app'
import { getBookByIdEndpoint } from '../endpoints'
import { updateBooks } from '../'

const getBookById = (id: string) => async (dispatch: AppDispatch, getState: GetState) => {
	const { endpoint, url } = getBookByIdEndpoint(id)
	dispatch(setLoader(endpoint))

	try {
		const response: Response<TBook> = await httpClient.get(url)
		const { data } = response.data
		dispatch(updateBooks({ currentBook: data }))
	} catch (e: any) {
		console.debug('ERROR:getBookById', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}

export default getBookById
