import endpointMaker from '@/helpers/endpointMaker'
import API_ROUTES from '@/constants/API_ROUTES'

export const loginEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.LOGIN,
})

export const logoutEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.LOGOUT,
})

export const registerEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.REGISTER,
})

export const forgotPasswordEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.FORGOT_PASSWORD,
})
export const resetPasswordEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.RESET_PASSWORD,
})

export const verifyCodeEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.VERIFY_CODE,
})
