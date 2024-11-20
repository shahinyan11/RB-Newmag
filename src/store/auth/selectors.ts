import { createSelector } from 'reselect'

import { AppState } from '@/store/types'

export const selectAuthStore = (store: AppState) => store.auth

export const selectAuthToken = createSelector(selectAuthStore, authStore => authStore.token)
