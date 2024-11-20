import type { AppDispatch, GetState } from '@/store/types'

import { TBook } from '@/types'
import httpClient from '@/httpClient'
import { Response } from '@/types/responses'
import { removeLoader, setLoader } from '@/store/app'
import { getChannelByIdEndpoint } from '../endpoints'
import { updateChannelsState } from '../'

export const getChannelById = (id: string) => async (dispatch: AppDispatch, getState: GetState) => {
	const { endpoint, url } = getChannelByIdEndpoint(id)
	dispatch(setLoader(endpoint))

	try {
		const response: Response<TBook> = await httpClient.get(url)
		const { data } = response.data
		dispatch(updateChannelsState({ currentChannel: data }))
	} catch (e: any) {
		console.debug('ERROR:getChannelById', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}
