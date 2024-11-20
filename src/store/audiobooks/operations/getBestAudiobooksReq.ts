import type { AppDispatch } from '@/store/types'

import { TAudiobook } from '@/types'
import { removeLoader, setLoader } from '@/store/app'
import httpClient from '@/httpClient'
import { Response } from '@/types/responses'
import { bestAudiobooksEndpoint } from '../endpoints'
import { updateAudiobooks } from '../'

export const getBestAudiobooksReq = () => async (dispatch: AppDispatch) => {
	const { endpoint, url } = bestAudiobooksEndpoint
	dispatch(setLoader(endpoint))

	try {
		const response: Response<TAudiobook[]> = await httpClient.get(url)
		const { data } = response.data

		dispatch(updateAudiobooks({ bestAudiobooks: data }))
	} catch (e: any) {
		console.debug('ERROR:getBestAudiobooksReq', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}
