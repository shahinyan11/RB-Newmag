import endpointMaker from '@/helpers/endpointMaker'
import API_ROUTES from '@/constants/API_ROUTES'

export const getDeliveryAddressesEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.ADDRESSES,
})

export const getDeliveryAddressByIdEndpoint = (id: string) =>
	endpointMaker({
		method: 'POST',
		url: `${API_ROUTES.ADDRESSES}/${id}`,
	})

export const addDeliveryAddressEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.ADDRESSES_STORE,
})

export const updateDeliveryAddressEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.ADDRESSES_UPDATE,
})

export const deleteDeliveryAddressEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.ADDRESSES_DELETE,
})

export const setDefaultDeliveryAddressEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.ADDRESSES_SET_DEFAULT,
})

export const getLanguageEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.LANG_GET,
})

export const setLanguageEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.LANG_SET,
})

export const userInfoEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.USER_INFO,
})

export const updateUserInfoEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.USER_INFO_UPDATE,
})

export const ordersEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.ORDERS,
})
