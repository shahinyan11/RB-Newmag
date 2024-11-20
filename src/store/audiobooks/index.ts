import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TAudiobook, TAuthor, TCategories, TPagination } from '@/types'

type InitState = {
	bestAudiobooks: TAudiobook[]
	audiobooks: TAudiobook[]
	similarAudiobooks: TAudiobook[]
	authors: TAuthor[]
	categories: TCategories[]
	audiobooksPagination: TPagination
	similarAudiobooksPagination: TPagination
	filters: {
		search: string
		author_ids: string[]
		category_ids: string[]
	}
	currentAudiobook?: TAudiobook
	userAudiobooks?: TAudiobook[]
}

const initState: InitState = {
	bestAudiobooks: [],
	audiobooks: [],
	authors: [],
	categories: [],
	audiobooksPagination: { page: 1, limit: 10, totalPages: undefined },
	similarAudiobooksPagination: { page: 1, limit: 4, totalPages: undefined },
	filters: {
		search: '',
		author_ids: [],
		category_ids: [],
	},
	currentAudiobook: undefined,
	similarAudiobooks: [],
	userAudiobooks: [],
}

const { reducer, actions } = createSlice({
	name: 'audiobooks',
	initialState: initState,
	reducers: {
		updateAudiobooks: (state, { payload }: PayloadAction<Partial<InitState>>) => ({
			...state,
			...payload,
		}),
		setAudiobooks: (state, { payload }) => {
			state.audiobooks = payload.audiobooks
			state.audiobooksPagination.page = payload.page
			state.audiobooksPagination.totalPages = payload.totalPages
		},
		updateFilterSearch: (state, { payload }) => {
			state.filters.search = payload
			state.audiobooksPagination = initState.audiobooksPagination
		},
		updateFilterAuthors: (state, { payload }) => {
			state.filters.author_ids = payload
			state.audiobooksPagination = initState.audiobooksPagination
		},
		updateFilterCategories: (state, { payload }) => {
			state.filters.category_ids = payload
			state.audiobooksPagination = initState.audiobooksPagination
		},
		setSimilarAudiobooks: (state, { payload }) => {
			state.similarAudiobooks = payload.similarAudiobooks
			state.similarAudiobooksPagination.page = payload.page
			state.similarAudiobooksPagination.totalPages = payload.totalPages
		},
		resetAudiobooks: () => initState,
	},
})

export default reducer

export const {
	updateAudiobooks,
	updateFilterSearch,
	updateFilterAuthors,
	updateFilterCategories,
	setAudiobooks,
	setSimilarAudiobooks,
	resetAudiobooks,
} = actions
