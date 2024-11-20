import endpointMaker from '@/helpers/endpointMaker'
import API_ROUTES from '@/constants/API_ROUTES'

export const countriesEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.COUNTRIES,
})

export const orderingTermsEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.TERMS,
})

export const paymentMethodsEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.PAYMENT_METHODS,
})

export const bannersEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.BANNERS,
})
