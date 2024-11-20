import type { AppDispatch, GetState } from '@/store/types'

import httpClient from '@/httpClient'
import { removeLoader, setLoader } from '@/store/app'
import { Response } from '@/types/responses'
import { TAudiobook } from '@/types'
import { audiobooksEndpoint } from '../endpoints'
import { setSimilarAudiobooks } from '../'

type GetSimilarAudiobooksReqParams = {
	audiobookId: string
	loadMore?: boolean
}

export const getSimilarAudiobooksReq =
	({ loadMore, audiobookId }: GetSimilarAudiobooksReqParams) =>
	async (dispatch: AppDispatch, getState: GetState) => {
		const { endpoint, url } = audiobooksEndpoint
		dispatch(setLoader(endpoint))

		let {
			similarAudiobooks,
			similarAudiobooksPagination: { page, limit },
		} = getState().audiobooks

		page = loadMore ? page + 1 : 1

		try {
			const response: Response<TAudiobook[]> = await httpClient.post(url, {
				page,
				limit,
				similar_to_audiobook_id: audiobookId,
			})
			const { data, totalPages } = response.data

			dispatch(
				setSimilarAudiobooks({
					page,
					totalPages,
					similarAudiobooks: loadMore ? [...similarAudiobooks, ...data] : data,
				}),
			)
		} catch (e: any) {
			console.debug('ERROR:getSimilarAudiobooksReq', e?.message)
		} finally {
			dispatch(removeLoader(endpoint))
		}
	}
