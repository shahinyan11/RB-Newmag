import { createSelector } from 'reselect'

import { AppState } from '@/store/types'

export const selectUserState = (state: AppState) => state.user

export const selectUser = createSelector(selectUserState, state => state.user)

export const selectDeliveryAddresses = createSelector(
	selectUserState,
	state => state.deliveryAddresses,
)

export const selectSelectedDeliveryAddress = createSelector(selectUserState, state =>
	state.deliveryAddresses.find(item => item.is_default),
)

export const selectLanguage = createSelector(selectUserState, state => state.language)

export const selectOrders = createSelector(selectUserState, state => state.orders)
