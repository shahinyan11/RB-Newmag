import { createSlice } from '@reduxjs/toolkit'
import { TChannel, TEpisode, TGroupedEpisode, TPagination } from '@/types'

const initState: {
	channels: TChannel[]
	channelsPagination: TPagination
	currentChannel?: TChannel
	episodes: TGroupedEpisode
	episodesPagination: TPagination
	recommendedChannels: TChannel[]
	recommendedEpisodes: TEpisode[]
} = {
	channels: [],
	channelsPagination: { page: 1, limit: 10, totalPages: undefined },
	currentChannel: undefined,
	episodes: [],
	episodesPagination: { page: 1, limit: 10, totalPages: undefined },
	recommendedChannels: [],
	recommendedEpisodes: [],
}

const { reducer, actions } = createSlice({
	name: 'channels',
	initialState: initState,
	reducers: {
		updateChannelsState: (state, { payload }) => ({
			...state,
			...payload,
		}),
		setChannels: (state, { payload }) => {
			state.channels = payload.channels
			state.channelsPagination.page = payload.page
			state.channelsPagination.totalPages = payload.totalPages
		},
		setEpisodes: (state, { payload }) => {
			state.episodes = payload.episodes
			state.episodesPagination.page = payload.page
			state.episodesPagination.totalPages = payload.totalPages
		},
		resetChannelsState: () => initState,
	},
})

export default reducer

export const { updateChannelsState, setChannels, setEpisodes, resetChannelsState } = actions
