import { createSlice } from '@reduxjs/toolkit'

const initState = {
	token: '',
}

const { reducer, actions } = createSlice({
	name: 'auth',
	initialState: initState,
	reducers: {
		updateAuth: (state, { payload }) => ({
			...state,
			...payload,
		}),

		resetAuth: () => initState,
	},
})

export default reducer

export const { updateAuth, resetAuth } = actions
