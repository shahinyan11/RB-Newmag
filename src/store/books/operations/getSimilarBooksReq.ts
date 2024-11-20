import type { AppDispatch, GetState } from '@/store/types'

import { TBook } from '@/types'
import { removeLoader, setLoader } from '@/store/app'
import httpClient from '@/httpClient'
import { Response } from '@/types/responses'
import { booksEndpoint } from '../endpoints'
import { setSimilarBooks } from '@/store/books'

type GetSimilarBooksReqParams = {
	bookId: string
	loadMore?: boolean
}

const getSimilarBooksReq =
	({ loadMore, bookId }: GetSimilarBooksReqParams) =>
	async (dispatch: AppDispatch, getState: GetState) => {
		const { endpoint, url } = booksEndpoint
		dispatch(setLoader(endpoint))

		let {
			similarBooks,
			similarBooksPagination: { page, limit },
		} = getState().books

		page = loadMore ? page + 1 : 1

		try {
			const response: Response<TBook[]> = await httpClient.post(url, {
				page,
				limit,
				similar_to_book_id: bookId,
			})
			const { data, totalPages } = response.data

			dispatch(
				setSimilarBooks({
					page,
					totalPages,
					similarBooks: loadMore ? [...similarBooks, ...data] : data,
				}),
			)
		} catch (e: any) {
			console.debug('ERROR:getSimilarBooksReq', e?.message)
		} finally {
			dispatch(removeLoader(endpoint))
		}
	}

export default getSimilarBooksReq
