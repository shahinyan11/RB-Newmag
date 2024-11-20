import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TBanner, TCountry, TPaymentMethod, TTerms } from '@/types'

const initState: {
	globalLoader: boolean
	loaders: { [key: string]: boolean }
	deliveryCountries: TCountry[]
	orderingTerms?: TTerms
	paymentMethods?: TPaymentMethod[]
	selectedPaymentMethod?: string
	banners?: TBanner[]
	fcmToken?: string
} = {
	globalLoader: false,
	loaders: {},
	deliveryCountries: [],
	selectedPaymentMethod: undefined,
	banners: [],
	fcmToken: '',
}

const { reducer, actions } = createSlice({
	name: 'app',
	initialState: initState,
	reducers: {
		updateAppState: (state, { payload }: PayloadAction<Partial<typeof initState>>) => ({
			...state,
			...payload,
		}),
		showGlobalLoader: state => {
			state.globalLoader = true
		},
		hideGlobalLoader: state => {
			state.globalLoader = false
		},
		setLoader: (state, { payload }) => {
			state.loaders[payload] = true
		},
		removeLoader: (state, { payload }) => {
			state.loaders[payload] = false
		},
	},
})

export default reducer

export const { updateAppState, showGlobalLoader, hideGlobalLoader, setLoader, removeLoader } =
	actions
