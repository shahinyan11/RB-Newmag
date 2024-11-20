import endpointMaker from '@/helpers/endpointMaker'
import API_ROUTES from '@/constants/API_ROUTES'

export const cartEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.CART,
})

export const addToCartEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.CART_ADD,
})

export const removeFromCartEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.CART_REMOVE,
})

export const updateQuantityEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.CART_UPDATE_QUANTITY,
})
