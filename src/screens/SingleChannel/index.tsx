import React, { FC, useCallback, useEffect, useState } from 'react'
import { SectionList, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { Section, TEpisode, TGroupedEpisode } from '@/types'
import { PrivateScreensParamList } from '@/navigation/types'
import { getChannelById, getChannelEpisodes } from '@/store/channels/operations'
import { useDispatch, useSelector } from '@/store/hooks'
import PodcastCard from '@/components/cards/PodcastCard'
import ScreenWrapper from '@/components/ScreenWrapper'
import Header from '@/components/Header'
import Text from '@/components/Text'
import ListHeader from './ListHeader'
import styles from './styles'
import { selectCurrentChannel, selectEpisodes } from '@/store/channels/selectors'
import AudioPlayer from '@/components/AudioPlayer'

type SingleChannelProps = StackScreenProps<PrivateScreensParamList, 'singleChannel'>

const SingleChannel: FC<SingleChannelProps> = ({ route }) => {
	const channelId = route.params.channelId
	const dispatch = useDispatch()
	const channel = useSelector(selectCurrentChannel)
	const episodes = useSelector(selectEpisodes)
	const [playedEpisode, setPlayedEpisode] = useState<TEpisode | undefined>()

	useEffect(() => {
		Promise.allSettled([
			dispatch(getChannelById(channelId)),
			dispatch(getChannelEpisodes(channelId)),
		])
	}, [])

	const renderItem = useCallback(
		({ item }: { item: TEpisode }) => (
			<PodcastCard
				data={item}
				containerStyle={styles.mh_10}
				onTogglePlay={() => setPlayedEpisode(item)}
			/>
		),
		[],
	)

	const renderSectionHeader = useCallback(
		({ section: { date } }: Section<TGroupedEpisode[number]>) => (
			<Text style={styles.sectionTitle} weight="600" size="S12" color="gray800">
				{date}
			</Text>
		),
		[],
	)

	return (
		<View style={styles.fl_1}>
			<ScreenWrapper HeaderComponent={<Header title={channel?.title} style={styles.ph_10} />}>
				<SectionList
					sections={episodes}
					ListHeaderComponent={ListHeader}
					renderItem={renderItem}
					renderSectionHeader={renderSectionHeader}
					contentContainerStyle={styles.sectionListContainer}
					showsVerticalScrollIndicator={false}
				/>
			</ScreenWrapper>
			{!!playedEpisode && (
				<AudioPlayer
					isSmallByDefault
					onClose={() => setPlayedEpisode(undefined)}
					trackInfo={{ title: playedEpisode.title, image: playedEpisode.image }}
				/>
			)}
		</View>
	)
}

SingleChannel.displayName = 'SingleChannel'
export default SingleChannel
