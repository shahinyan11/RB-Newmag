import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Track } from 'react-native-track-player'

const initialState: {
	speed: number
	currentTrack?: Track
} = {
	speed: 1,
}

const { reducer, actions } = createSlice({
	name: 'audioPlayer',
	initialState: initialState,
	reducers: {
		updateAudioPlayer: (state, { payload }: PayloadAction<Partial<typeof initialState>>) => ({
			...state,
			...payload,
		}),

		resetAudioPlayer: () => initialState,
	},
})

export default reducer

export const { resetAudioPlayer, updateAudioPlayer } = actions
