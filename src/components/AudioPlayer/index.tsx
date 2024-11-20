import React, { FC, ReactNode, useState } from 'react'
import { View } from 'react-native'
import { State, usePlaybackState } from 'react-native-track-player'
import SafeAreaContainer from '@/components/containers/SafeAreaContainer'
import AudioPlayerControl from './AudioPlayerControl'
import SmallPreview from './SmallPreview'
import BigPreview from './BigPreview'
import styles from './styles'
import { TTrackInfo } from '@/types'

type AudioPlayerControlProps = {
	onClose: () => void
	trackInfo?: TTrackInfo
	isSmallByDefault?: boolean
	footerComponent?: ({
		isPlaying,
		isSmall,
	}: {
		isPlaying: boolean
		isSmall: boolean
	}) => ReactNode
}

const AudioPlayer: FC<AudioPlayerControlProps> = ({
	onClose,
	trackInfo,
	isSmallByDefault,
	footerComponent,
}) => {
	const [isSmall, setIsSmall] = useState(Boolean(isSmallByDefault))
	const playerState = usePlaybackState()
	const isPlaying = playerState.state === State.Playing

	return (
		<SafeAreaContainer containerStyle={[styles.container, isSmall && styles.smallContainer]}>
			{!isSmall && <BigPreview data={trackInfo} onClose={() => setIsSmall(true)} />}

			<View style={[styles.width_100, styles.zi_9]}>
				<AudioPlayerControl hideControls={isSmall} hideTimes={isSmall} />
			</View>

			{isSmall && (
				<SmallPreview
					data={trackInfo}
					containerStyle={styles.mb_16}
					onClose={onClose}
					onPress={() => setIsSmall(false)}
				/>
			)}

			{footerComponent?.({ isPlaying, isSmall })}
		</SafeAreaContainer>
	)
}

export default AudioPlayer
