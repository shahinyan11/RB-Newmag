import type { AppDispatch, GetState } from '@/store/types'

import { TCategories } from '@/types'
import { removeLoader, setLoader } from '@/store/app'
import httpClient from '@/httpClient'
import { Response } from '@/types/responses'
import { categoriesEndpoint } from '../endpoints'
import { updateBooks } from '@/store/books'

const getCategoriesReq = () => async (dispatch: AppDispatch, getState: GetState) => {
	const { endpoint, url } = categoriesEndpoint
	dispatch(setLoader(endpoint))

	try {
		const response: Response<TCategories[]> = await httpClient.post(url)

		const { data } = response.data
		dispatch(updateBooks({ categories: data }))
	} catch (e: any) {
		console.debug('ERROR:getCategoriesReq', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}

export default getCategoriesReq
