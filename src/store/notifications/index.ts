import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TGroupedNotifications } from '@/types'

const initState: {
	newList: TGroupedNotifications
	readList: TGroupedNotifications
} = {
	newList: [],
	readList: [],
}

const { reducer, actions } = createSlice({
	name: 'notifications',
	initialState: initState,
	reducers: {
		updateNotificationsState: (
			state,
			{ payload }: PayloadAction<Partial<typeof initState>>,
		) => ({
			...state,
			...payload,
		}),
	},
})

export default reducer

export const { updateNotificationsState } = actions
