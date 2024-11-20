import { createSelector } from 'reselect'

import { AppState } from '@/store/types'

export const selectNewsState = (store: AppState) => store.news

export const selectLatestNews = createSelector(selectNewsState, newsState => newsState.latestNews)
export const selectNews = createSelector(selectNewsState, newsState => newsState.news)
export const selectCurrentNews = createSelector(selectNewsState, newsState => newsState.currentNews)
