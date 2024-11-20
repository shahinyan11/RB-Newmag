import endpointMaker from '@/helpers/endpointMaker'
import API_ROUTES from '@/constants/API_ROUTES'

export const trendingBooksEndpoint = endpointMaker({
	method: 'GET',
	url: API_ROUTES.TRENDING_BOOKS,
})

export const booksEndpoint = endpointMaker({
	method: 'GET',
	url: API_ROUTES.BOOKS,
})

export const authorsEndpoint = endpointMaker({
	method: 'GET',
	url: API_ROUTES.AUTHORS,
})

export const categoriesEndpoint = endpointMaker({
	method: 'GET',
	url: API_ROUTES.CATEGORIES,
})

export const getBookByIdEndpoint = (id: string) =>
	endpointMaker({
		method: 'GET',
		url: `${API_ROUTES.BOOKS}/${id}`,
	})

export const userDigitalBooksEndpoint = endpointMaker({
	method: 'POST',
	url: API_ROUTES.USER_DIGITAL_BOOKS,
})
