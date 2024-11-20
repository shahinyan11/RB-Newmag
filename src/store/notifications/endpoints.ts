import endpointMaker from '@/helpers/endpointMaker'
import API_ROUTES from '@/constants/API_ROUTES'

export const notificationsEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.NOTIFICATIONS,
})

export const markNotificationAsReadEndpoint = (id: string) =>
	endpointMaker({
		method: 'POST',
		url: `${API_ROUTES.NOTIFICATIONS}/${id}/markAsRead`,
	})
