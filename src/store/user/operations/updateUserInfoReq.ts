import type { AppDispatch } from '@/store/types'
import httpClient from '@/httpClient'
import { removeLoader, setLoader } from '@/store/app'
import { updateUserState } from '@/store/user'
import { updateUserInfoEndpoint } from '@/store/user/endpoints'
import Toast from 'react-native-toast-message'
import { t } from '@/i18n'

type UpdateUserInfoReqParams = {
	name?: string
	last_name?: string
	phone?: string
}

export const updateUserInfoReq =
	(params: UpdateUserInfoReqParams) => async (dispatch: AppDispatch) => {
		const { endpoint, url } = updateUserInfoEndpoint
		dispatch(setLoader(endpoint))

		try {
			const response = await httpClient.post(url, params)
			const { data } = response.data

			dispatch(updateUserState({ user: data }))
			Toast.show({
				type: 'success',
				text1: t('messages.successfullyUpdated'),
			})
		} catch (e: any) {
			console.debug('ERROR:getUserInfoReq', e?.message)
		} finally {
			dispatch(removeLoader(endpoint))
		}
	}
