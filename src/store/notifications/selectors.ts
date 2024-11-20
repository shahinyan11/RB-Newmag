import { createSelector } from 'reselect'

import { AppState } from '@/store/types'

export const selectNotificationsState = (state: AppState) => state.notifications

export const selectNotifications = (isRead?: boolean) =>
	createSelector(selectNotificationsState, state => (isRead ? state.readList : state.newList))
