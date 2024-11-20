import type { AppDispatch, GetState } from '@/store/types'

import { removeLoader, setLoader } from '@/store/app'
import httpClient from '@/httpClient'
import { Response } from '@/types/responses'
import { TEpisode } from '@/types'
import { recommendedEpisodesEndpoint } from '../endpoints'
import { updateChannelsState } from '../'

export const getRecommendedEpisodesReq =
	() => async (dispatch: AppDispatch, getState: GetState) => {
		const { endpoint, url } = recommendedEpisodesEndpoint
		dispatch(setLoader(endpoint))

		try {
			const response: Response<TEpisode[]> = await httpClient.post(url)
			const { data } = response.data

			dispatch(updateChannelsState({ recommendedEpisodes: data }))
		} catch (e: any) {
			console.debug('ERROR:getRecommendedEpisodesReq', e?.message)
		} finally {
			dispatch(removeLoader(endpoint))
		}
	}
