import Axios from 'axios'
import { Middleware } from '@reduxjs/toolkit'
import { AppStore } from '@/store/types'
import Toast from 'react-native-toast-message'
import { API_URL } from '@/constants/CONST'

const httpClient = Axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
	},
})

export const axiosMiddleware: Middleware<{}, AppStore> =
	({ getState, dispatch }) =>
	next =>
	action => {
		httpClient.interceptors.request.use(
			config => {
				// if (!config.headers.Authorization) {
				// 	config.headers.Authorization = token ? `Bearer ${token}` : ''
				// }

				config.headers['Accept-Auth-Token'] = getState().auth.token
				config.headers['Accept-Language'] = 'en'

				return config
			},
			error => {
				return Promise.reject(error)
			},
		)

		httpClient.interceptors.response.use(
			response => {
				// const data = response?.data
				//
				// if (!data.status) {
				// 	Toast.show({
				// 		type: 'error',
				// 		text1: data.message,
				// 	})
				//
				// 	return Promise.reject({ message: data.message })
				// }

				return response
			},
			error => {
				const { data, status } = error?.response || {}

				Toast.show({
					type: 'error',
					text1: data.message ?? 'Server error without any message',
				})

				// if (+data?.status === 401 || +status === 401) {
				// 	// dispatch logout action
				//
				// 	return
				// }

				return Promise.reject(error)
			},
		)

		next(action)
	}

export default httpClient
