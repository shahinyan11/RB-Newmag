import { Image, StyleProp, View, ViewStyle } from 'react-native'
import { useCallback } from 'react'
import { TEpisode, TIconNames } from '@/types'
import Icon from '@/components/Icon'
import Text from '@/components/Text'
import styles from './styles'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import { useSelector } from 'react-redux'
import { selectCurrentTrack } from '@/store/audioPlayer/selectors'
import { useTranslation } from 'react-i18next'

type PodcastCardProps = {
	containerStyle?: StyleProp<ViewStyle>
	data: TEpisode
	onTogglePlay?: () => void
}

function PodcastCard({ containerStyle, data, onTogglePlay }: PodcastCardProps) {
	const { t } = useTranslation()
	const playerState = usePlaybackState()
	const currentTrack = useSelector(selectCurrentTrack)
	const isPLaying = playerState.state === State.Playing && currentTrack?.id === data.id
	const iconName: TIconNames = isPLaying ? 'playOutline' : 'pauseOutline'

	const togglePlay = useCallback(() => {
		if (currentTrack?.id !== data.id) {
			TrackPlayer.load({
				id: data.id,
				url: data.audio,
				title: data?.title,
				artwork: data?.image,
			}).then(track => {
				onTogglePlay?.()
				TrackPlayer.play()
			})
		}

		isPLaying ? TrackPlayer.pause() : TrackPlayer.play()
	}, [isPLaying])

	return (
		<View style={[styles.container, containerStyle]}>
			<Image source={{ uri: data.image }} style={styles.image} />
			<View style={styles.centerContainer}>
				<Text weight="500" color="black500">
					{data.title}
				</Text>
				<Text size="S14" weight="300" color="gray800">
					{t('common.episode')}
					{data.episodes_count}
				</Text>
				<View style={styles.dateContainer}>
					<Icon name="clock" />
					<Text size="S14">{data.duration}</Text>
				</View>
			</View>
			<Icon name={iconName} onPress={togglePlay} />
		</View>
	)
}

PodcastCard.displayName = 'PodcastCard'
export default PodcastCard
