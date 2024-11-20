import type { AppDispatch, GetState } from '@/store/types'

import { Response } from '@/types/responses'
import { TAudiobook } from '@/types'
import httpClient from '@/httpClient'
import { removeLoader, setLoader } from '@/store/app'
import { userAudiobooksEndpoint } from '../endpoints'
import { updateAudiobooks } from '../'

export const getUserAudiobooksReq = () => async (dispatch: AppDispatch, getState: GetState) => {
	const { endpoint, url } = userAudiobooksEndpoint
	dispatch(setLoader(endpoint))

	try {
		const response: Response<TAudiobook[]> = await httpClient.post(url, {})
		const { data } = response.data

		dispatch(updateAudiobooks({ userAudiobooks: data }))
	} catch (e: any) {
		console.debug('ERROR:getUserAudiobooksReq', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}
