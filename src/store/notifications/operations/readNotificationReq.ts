import httpClient from '@/httpClient'
import { removeLoader, setLoader } from '@/store/app'
import type { AppDispatch } from '@/store/types'
import { markNotificationAsReadEndpoint } from '../endpoints'
import { getNotificationsReq } from '@/store/notifications/operations/getNotificationsReq'

export const readNotificationReq = (id: string) => async (dispatch: AppDispatch) => {
	const { endpoint, url } = markNotificationAsReadEndpoint(id)
	dispatch(setLoader(endpoint))

	try {
		await httpClient.post(url)
		
		dispatch(getNotificationsReq())
		dispatch(getNotificationsReq(true))
	} catch (e: any) {
		console.debug('ERROR:readNotificationReq', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}
