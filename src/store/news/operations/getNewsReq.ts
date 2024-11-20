import type { AppDispatch, GetState } from '@/store/types'

import { removeLoader, setLoader } from '@/store/app'
import httpClient from '@/httpClient'
import { Response } from '@/types/responses'
import { TNews } from '@/types'
import { newsEndpoint } from '../endpoints'
import { setNews } from '../'

export const getNewsReq =
	(loadMore?: boolean) => async (dispatch: AppDispatch, getState: GetState) => {
		const { endpoint, url } = newsEndpoint
		dispatch(setLoader(endpoint))

		try {
			let {
				news,
				newsPagination: { page, limit },
			} = getState().news
			page = loadMore ? page + 1 : 1

			const response: Response<TNews[]> = await httpClient.post(url, { page, limit })
			const { data, totalPages } = response.data
			
			dispatch(setNews({ page, totalPages, news: loadMore ? [...news, ...data] : data }))
		} catch (e: any) {
			console.debug('ERROR:getLatestNewsReq', e?.message)
		} finally {
			dispatch(removeLoader(endpoint))
		}
	}
