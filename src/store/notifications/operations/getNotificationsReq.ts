import httpClient from '@/httpClient'
import { updateNotificationsState } from '@/store/notifications'
import { removeLoader, setLoader } from '@/store/app'
import type { AppDispatch } from '@/store/types'
import { notificationsEndpoint } from '../endpoints'

export const getNotificationsReq = (isRead?: boolean) => async (dispatch: AppDispatch) => {
	const { endpoint, url } = notificationsEndpoint
	dispatch(setLoader(endpoint))

	try {
		const response = await httpClient.post(url, { is_read: isRead ? 1 : 0 })
		const { data } = response.data

		dispatch(updateNotificationsState({ [isRead ? 'readList' : 'newList']: data }))
	} catch (e: any) {
		console.debug('ERROR:getNotificationsReq', e?.message)
	} finally {
		dispatch(removeLoader(endpoint))
	}
}
