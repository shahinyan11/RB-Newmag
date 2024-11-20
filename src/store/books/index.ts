import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TAuthor, TBook, TCategories, TPagination } from '@/types'

type InitState = {
	trendingBooks: TBook[]
	allBooks: TBook[]
	similarBooks: TBook[]
	authors: TAuthor[]
	categories: TCategories[]
	allBooksPagination: TPagination
	similarBooksPagination: TPagination
	filters: {
		search: string
		author_ids: string[]
		category_ids: string[]
	}
	currentBook?: TBook
	userDigitalBooks: TBook[]
}

const initState: InitState = {
	trendingBooks: [],
	allBooks: [],
	authors: [],
	categories: [],
	allBooksPagination: { page: 1, limit: 10, totalPages: undefined },
	similarBooksPagination: { page: 1, limit: 4, totalPages: undefined },
	filters: {
		search: '',
		author_ids: [],
		category_ids: [],
	},
	currentBook: undefined,
	similarBooks: [],
	userDigitalBooks: [],
}

const { reducer, actions } = createSlice({
	name: 'books',
	initialState: initState,
	reducers: {
		updateBooks: (state, { payload }: PayloadAction<Partial<InitState>>) => ({
			...state,
			...payload,
		}),
		setBooks: (state, { payload }) => {
			state.allBooks = payload.allBooks
			state.allBooksPagination.page = payload.page
			state.allBooksPagination.totalPages = payload.totalPages
		},
		updateFilterSearch: (state, { payload }) => {
			state.filters.search = payload
			state.allBooksPagination = initState.allBooksPagination
		},
		updateFilterAuthors: (state, { payload }) => {
			state.filters.author_ids = payload
			state.allBooksPagination = initState.allBooksPagination
		},
		updateFilterCategories: (state, { payload }) => {
			state.filters.category_ids = payload
			state.allBooksPagination = initState.allBooksPagination
		},
		setSimilarBooks: (state, { payload }) => {
			state.similarBooks = payload.similarBooks
			state.similarBooksPagination.page = payload.page
			state.similarBooksPagination.totalPages = payload.totalPages
		},
		resetBooks: () => initState,
	},
})

export default reducer

export const {
	updateBooks,
	updateFilterSearch,
	updateFilterAuthors,
	updateFilterCategories,
	setBooks,
	setSimilarBooks,
	resetBooks,
} = actions
