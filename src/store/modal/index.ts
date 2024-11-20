import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { BottomSheet, InitialModalState } from './types'

const initialState: InitialModalState = {
	modal: {
		type: undefined,
		data: {},
	},
	bottomSheet: {
		type: undefined,
		data: {},
	},
}

const { reducer, actions } = createSlice({
	name: 'modal',
	initialState: initialState,
	reducers: {
		showModal: (state, { payload }) => {
			state.modal.type = payload.type
			state.modal.data = payload.data || {}
		},
		hideModal: state => {
			state.modal = { type: undefined, data: {} }
		},

		openBottomSheet: (state, action: PayloadAction<BottomSheet>) => {
			state.bottomSheet.type = action.payload.type
			state.bottomSheet.data = action.payload.data || {}
		},
		closeBottomSheet: state => {
			state.bottomSheet = { type: undefined, data: {} }
		},
	},
})

export default reducer

export const { showModal, hideModal, openBottomSheet, closeBottomSheet } = actions
