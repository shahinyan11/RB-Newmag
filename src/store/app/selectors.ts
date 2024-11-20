import { createSelector } from 'reselect'

import { AppState } from '../types'

export const selectAppState = (store: AppState) => store.app

export const selectGlobalLoader = createSelector(selectAppState, state => state.globalLoader)

export const selectLoaders = createSelector(selectAppState, state => state.loaders)

export const selectIsLoading = (endpoint: string) =>
	createSelector(selectAppState, state => state.loaders[endpoint])

export const selectDeliveryCountries = createSelector(
	selectAppState,
	state => state.deliveryCountries,
)

export const selectOrderingTerms = createSelector(selectAppState, state => state.orderingTerms)
export const selectPaymentMethods = createSelector(selectAppState, state => state.paymentMethods)
export const selectSelectedPaymentMethod = createSelector(
	selectAppState,
	state => state.selectedPaymentMethod,
)
export const selectPaymentMethodById = (id?: string) =>
	createSelector(selectAppState, state => state.paymentMethods?.find(item => item.id === id))

export const selectBanner = createSelector(selectAppState, state => state.banners?.[0])
