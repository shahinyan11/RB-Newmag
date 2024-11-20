import endpointMaker from '@/helpers/endpointMaker'
import API_ROUTES from '@/constants/API_ROUTES'

export const channelsEndpoint = endpointMaker({
	method: 'GET',
	url: API_ROUTES.CHANNELS,
})

export const getChannelByIdEndpoint = (id: string) =>
	endpointMaker({
		method: 'GET',
		url: `${API_ROUTES.CHANNELS}/${id}`,
	})

export const getChannelEpisodesEndpoint = (id: string) =>
	endpointMaker({
		method: 'GET',
		url: `${API_ROUTES.CHANNELS}/${id}/episodes`,
	})

export const recommendedChannelsEndpoint = endpointMaker({
	method: 'GET',
	url: API_ROUTES.RECOMMENDED_CHANNELS,
})
export const recommendedEpisodesEndpoint = endpointMaker({
	method: 'GET',
	url: API_ROUTES.RECOMMENDED_EPISODES,
})
