import type { AppDispatch, GetState } from '@/store/types'

import { Response } from '@/types/responses'
import { TBook } from '@/types'
import httpClient from '@/httpClient'
import { removeLoader, setLoader } from '@/store/app'
import { userDigitalBooksEndpoint } from '../endpoints'
import { updateBooks } from '../'

export const getUserDigitalBooksReq = () => async (dispatch: AppDispatch, getState: GetState) => {
	const { endpoint, url } = userDigitalBooksEndpoint
	dispatch(setLoader(endpoint))

	try {
		const response: Response<TBook[]> = await httpClient.post(url)
		const { data } = response.data

		dispatch(updateBooks({ userDigitalBooks: data }))
	} catch (e: any) {
		console.debug('ERROR:getUserDigitalBooksReq', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}
