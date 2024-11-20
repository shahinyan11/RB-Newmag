import type { AppDispatch, GetState } from '@/store/types'

import { Response } from '@/types/responses'
import { TAudiobook } from '@/types'
import httpClient from '@/httpClient'
import { removeLoader, setLoader } from '@/store/app'
import { audiobooksEndpoint } from '../endpoints'
import { setAudiobooks } from '../'

export const getAudiobooksReq =
	(loadMore?: boolean) => async (dispatch: AppDispatch, getState: GetState) => {
		const { endpoint, url } = audiobooksEndpoint
		dispatch(setLoader(endpoint))

		let {
			audiobooks,
			filters,
			audiobooksPagination: { page, limit },
		} = getState().audiobooks
		page = loadMore ? page + 1 : 1

		try {
			const response: Response<TAudiobook[]> = await httpClient.post(url, {
				...filters,
				page,
				limit,
			})
			const { data, totalPages } = response.data

			dispatch(
				setAudiobooks({
					page,
					totalPages,
					audiobooks: loadMore ? [...audiobooks, ...data] : data,
				}),
			)
		} catch (e: any) {
			console.debug('ERROR:getAudiobooksReq', e?.message)
		} finally {
			dispatch(removeLoader(endpoint))
		}
	}
