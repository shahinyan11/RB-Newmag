import { createSelector } from 'reselect'

import { AppState } from '@/store/types'

export const selectAudiobooksState = (store: AppState) => store.audiobooks

export const selectBestAudiobooks = createSelector(
	selectAudiobooksState,
	audiobooksState => audiobooksState.bestAudiobooks,
)

export const selectAudiobooks = createSelector(
	selectAudiobooksState,
	audiobooksState => audiobooksState.audiobooks,
)

export const selectAuthors = createSelector(
	selectAudiobooksState,
	audiobooksState => audiobooksState.authors,
)

export const selectCategories = createSelector(
	selectAudiobooksState,
	audiobooksState => audiobooksState.categories,
)

export const selectFilters = createSelector(
	selectAudiobooksState,
	audiobooksState => audiobooksState.filters,
)

export const selectFilterAuthors = createSelector(
	selectAudiobooksState,
	audiobooksState => audiobooksState.filters.author_ids,
)

export const selectFilterCategories = createSelector(
	selectAudiobooksState,
	audiobooksState => audiobooksState.filters.category_ids,
)

export const selectCurrentAudiobook = createSelector(
	selectAudiobooksState,
	audiobooksState => audiobooksState.currentAudiobook,
)

export const selectSimilarAudiobooks = createSelector(
	selectAudiobooksState,
	audiobooksState => audiobooksState.similarAudiobooks,
)

export const selectUserAudiobooks = createSelector(
	selectAudiobooksState,
	audiobooksState => audiobooksState.userAudiobooks,
)
