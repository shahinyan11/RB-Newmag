import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TAddress, TGroupedOrders, User, valueof } from '@/types'
import { APP_LANGUAGES } from '@/constants/CONST'

const initState: {
	user: User
	deliveryAddresses: TAddress[]
	language: valueof<typeof APP_LANGUAGES>
	orders: TGroupedOrders
} = {
	user: {},
	deliveryAddresses: [],
	language: APP_LANGUAGES.AM,
	orders: [],
}

const { reducer, actions } = createSlice({
	name: 'user',
	initialState: initState,
	reducers: {
		updateUserState: (state, { payload }: PayloadAction<Partial<typeof initState>>) => ({
			...state,
			...payload,
		}),

		resetUser: () => initState,
	},
})

export default reducer

export const { updateUserState, resetUser } = actions
