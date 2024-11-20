import { createSelector } from 'reselect'

import { AppState } from '@/store/types'

export const selectChannelsState = (store: AppState) => store.channels

export const selectChannels = createSelector(
	selectChannelsState,
	channelsState => channelsState.channels,
)
export const selectCurrentChannel = createSelector(
	selectChannelsState,
	channelsState => channelsState.currentChannel,
)
export const selectEpisodes = createSelector(
	selectChannelsState,
	channelsState => channelsState.episodes,
)
export const selectRecommendedChannels = createSelector(
	selectChannelsState,
	channelsState => channelsState.recommendedChannels,
)
export const selectRecommendedEpisodes = createSelector(
	selectChannelsState,
	channelsState => channelsState.recommendedEpisodes,
)
