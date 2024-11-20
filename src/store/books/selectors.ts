import { createSelector } from 'reselect'

import { AppState } from '@/store/types'

export const selectBooksState = (store: AppState) => store.books

export const selectTrendingBooks = createSelector(
	selectBooksState,
	booksState => booksState.trendingBooks,
)

export const selectAllBooksBooks = createSelector(
	selectBooksState,
	booksState => booksState.allBooks,
)

export const selectAuthors = createSelector(selectBooksState, booksState => booksState.authors)

export const selectCategories = createSelector(
	selectBooksState,
	booksState => booksState.categories,
)

export const selectFilters = createSelector(selectBooksState, booksState => booksState.filters)

export const selectFilterAuthors = createSelector(
	selectBooksState,
	booksState => booksState.filters.author_ids,
)

export const selectFilterCategories = createSelector(
	selectBooksState,
	booksState => booksState.filters.category_ids,
)

export const selectCurrentBook = createSelector(
	selectBooksState,
	booksState => booksState.currentBook,
)

export const selectSimilarBooks = createSelector(
	selectBooksState,
	booksState => booksState.similarBooks,
)

export const selectUserDigitalBooks = createSelector(
	selectBooksState,
	booksState => booksState.userDigitalBooks,
)
