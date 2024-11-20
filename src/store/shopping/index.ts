import { createSlice } from '@reduxjs/toolkit'
import { TCart } from '@/types'

const initState: {
	cart?: TCart
} = {
	cart: undefined,
}

const { reducer, actions } = createSlice({
	name: 'shopping',
	initialState: initState,
	reducers: {
		updateShoppingState: (state, { payload }) => ({
			...state,
			...payload,
		}),

		resetShoppingState: () => initState,
	},
})

export default reducer

export const { updateShoppingState, resetShoppingState } = actions
