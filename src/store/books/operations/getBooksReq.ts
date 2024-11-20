import type { AppDispatch, GetState } from '@/store/types'

import { TBook } from '@/types'
import { removeLoader, setLoader } from '@/store/app'
import httpClient from '@/httpClient'
import { Response } from '@/types/responses'
import { booksEndpoint } from '../endpoints'
import { setBooks } from '@/store/books'

const getBooksReq = (loadMore?: boolean) => async (dispatch: AppDispatch, getState: GetState) => {
	const { endpoint, url } = booksEndpoint
	dispatch(setLoader(endpoint))

	let {
		allBooks,
		filters,
		allBooksPagination: { page, limit },
	} = getState().books

	if (loadMore) page += 1

	try {
		const response: Response<TBook[]> = await httpClient.post(url, {
			...filters,
			page,
			limit,
		})
		const { data, totalPages } = response.data

		dispatch(
			setBooks({
				page,
				totalPages,
				allBooks: loadMore ? [...allBooks, ...data] : data,
			}),
		)
		console.log(2222222)
	} catch (e: any) {
		console.debug('ERROR:getBooksReq', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}

export default getBooksReq
