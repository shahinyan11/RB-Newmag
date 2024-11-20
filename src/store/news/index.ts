import { createSlice } from '@reduxjs/toolkit'
import { TNews, TPagination } from '@/types'

const initState: {
	latestNews: TNews[]
	news: TNews[]
	newsPagination: TPagination
	currentNews?: TNews
} = {
	latestNews: [],
	news: [],
	newsPagination: { page: 1, limit: 10, totalPages: undefined },
	currentNews: undefined,
}

const { reducer, actions } = createSlice({
	name: 'news',
	initialState: initState,
	reducers: {
		updateNewsState: (state, { payload }) => ({
			...state,
			...payload,
		}),
		setNews: (state, { payload }) => {
			state.news = payload.news
			state.newsPagination.page = payload.page
			state.newsPagination.totalPages = payload.totalPages
		},
		resetNewsState: () => initState,
	},
})

export default reducer

export const { updateNewsState, setNews, resetNewsState } = actions
