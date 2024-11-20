import type { AppDispatch, GetState } from '@/store/types'

import { removeLoader, setLoader } from '@/store/app'
import httpClient from '@/httpClient'
import { Response } from '@/types/responses'
import { TChannel } from '@/types'
import { recommendedChannelsEndpoint } from '../endpoints'
import { updateChannelsState } from '../'

export const getRecommendedChannelsReq =
	(loadMore?: boolean) => async (dispatch: AppDispatch, getState: GetState) => {
		const { endpoint, url } = recommendedChannelsEndpoint
		dispatch(setLoader(endpoint))

		try {
			const response: Response<TChannel[]> = await httpClient.post(url)
			const { data } = response.data

			dispatch(updateChannelsState({ recommendedChannels: data }))
		} catch (e: any) {
			console.debug('ERROR:getRecommendedChannelsReq', e?.message)
		} finally {
			dispatch(removeLoader(endpoint))
		}
	}
