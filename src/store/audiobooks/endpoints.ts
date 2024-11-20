import endpointMaker from '@/helpers/endpointMaker'
import API_ROUTES from '@/constants/API_ROUTES'

export const audiobooksEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.AUDIOBOOKS,
})

export const getAudiobookByIdEndpoint = (id: string) =>
	endpointMaker({
		method: 'POST',
		url: `${API_ROUTES.AUDIOBOOKS}/${id}`,
	})

export const bestAudiobooksEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.BEST_AUDIOBOOKS,
})

export const categoriesEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.CATEGORIES,
})

export const userAudiobooksEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.USER_AUDIOBOOKS,
})
