import type { AppDispatch, GetState } from '@/store/types'

import httpClient from '@/httpClient'
import { Response } from '@/types/responses'
import { TGroupedEpisode } from '@/types'
import { removeLoader, setLoader } from '@/store/app'
import { getChannelEpisodesEndpoint } from '../endpoints'
import { setEpisodes } from '../'

export const getChannelEpisodes =
	(id: string, loadMore?: boolean) => async (dispatch: AppDispatch, getState: GetState) => {
		const { endpoint, url } = getChannelEpisodesEndpoint(id)
		dispatch(setLoader(endpoint))

		try {
			let {
				episodes,
				episodesPagination: { page, limit },
			} = getState().channels
			page = loadMore ? page + 1 : 1

			const response: Response<TGroupedEpisode> = await httpClient.post(url, {
				page,
				limit,
			})
			const { data, totalPages } = response.data

			dispatch(
				setEpisodes({
					page,
					totalPages,
					episodes: loadMore ? [...episodes, ...data] : data,
				}),
			)
		} catch (e: any) {
			console.debug('ERROR:getChannelEpisodes', e?.message)
		} finally {
			dispatch(removeLoader(endpoint))
		}
	}
