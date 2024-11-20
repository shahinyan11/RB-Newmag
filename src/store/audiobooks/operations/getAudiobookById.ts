import type { AppDispatch, GetState } from '@/store/types'

import httpClient from '@/httpClient'
import { Response } from '@/types/responses'
import { TAudiobook } from '@/types'
import { removeLoader, setLoader } from '@/store/app'
import { getAudiobookByIdEndpoint } from '../endpoints'
import { updateAudiobooks } from '../'

export const getAudiobookById =
	(id: string) => async (dispatch: AppDispatch, getState: GetState) => {
		const { endpoint, url } = getAudiobookByIdEndpoint(id)
		dispatch(setLoader(endpoint))

		try {
			const response: Response<TAudiobook> = await httpClient.get(url)
			const { data } = response.data
			dispatch(updateAudiobooks({ currentAudiobook: data }))
		} catch (e: any) {
			console.debug('ERROR:getAudiobookById', e?.message)
		} finally {
			dispatch(removeLoader(endpoint))
		}
	}
