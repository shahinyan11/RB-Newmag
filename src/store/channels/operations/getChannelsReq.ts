import type { AppDispatch, GetState } from '@/store/types'

import { removeLoader, setLoader } from '@/store/app'
import httpClient from '@/httpClient'
import { Response } from '@/types/responses'
import { TChannel } from '@/types'
import { channelsEndpoint } from '../endpoints'
import { setChannels } from '../'

export const getChannelsReq =
	(loadMore?: boolean) => async (dispatch: AppDispatch, getState: GetState) => {
		const { endpoint, url } = channelsEndpoint
		dispatch(setLoader(endpoint))

		try {
			let {
				channels,
				channelsPagination: { page, limit },
			} = getState().channels
			page = loadMore ? page + 1 : 1

			const response: Response<TChannel[]> = await httpClient.post(url, { page, limit })
			const { data, totalPages } = response.data

			dispatch(
				setChannels({
					page,
					totalPages,
					channels: loadMore ? [...channels, ...data] : data,
				}),
			)
		} catch (e: any) {
			console.debug('ERROR:getChannelsReq', e?.message)
		} finally {
			dispatch(removeLoader(endpoint))
		}
	}
