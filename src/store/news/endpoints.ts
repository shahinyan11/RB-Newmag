import endpointMaker from '@/helpers/endpointMaker'
import API_ROUTES from '@/constants/API_ROUTES'

export const newsEndpoint = endpointMaker({
	method: 'GET',
	url: API_ROUTES.NEWS,
})

export const latestNewsEndpoint = endpointMaker({
	method: 'GET',
	url: API_ROUTES.LAST_NEWS,
})

export const getNewsByIdEndpoint = (id: string) =>
	endpointMaker({
		method: 'GET',
		url: `${API_ROUTES.NEWS}/${id}`,
	})
