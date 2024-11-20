import { createSelector } from 'reselect'
import _ from 'lodash'

import { AppState } from '@/store/types'

export const selectShoppingState = (state: AppState) => state.shopping

export const selectCart = createSelector(selectShoppingState, state => state.cart)

export const selectCartItemsCount = createSelector(
	selectShoppingState,
	state => state.cart?.products?.length,
)

export const selectCartTotals = createSelector(selectShoppingState, state =>
	_.omit(state.cart, ['products']),
)
