import React, { FC, useCallback, useEffect } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Easing, useSharedValue, withTiming } from 'react-native-reanimated'
import { Slider } from 'react-native-awesome-slider'

import Text from '@/components/Text'
import Colors from '@/theme/colors'
import styles from './styles'
import Icon from '@/components/Icon'
import secondsToHMS from '@/utils/secondsToHMS'
import { useNavigation } from '@react-navigation/native'
import SCREENS from '@/navigation/SCREENS'
import { NavigationProp } from '@/navigation/types'
import TrackPlayer, { State, usePlaybackState, useProgress } from 'react-native-track-player'
import { useSelector } from 'react-redux'
import { selectSpeed } from '@/store/audioPlayer/selectors'
import Pressable from '@/components/Pressable'

type AudioPlayerControlProps = {
	hideControls?: boolean
	hideTimes?: boolean
}

const track = {}

const AudioPlayerControl: FC<AudioPlayerControlProps> = ({ hideControls, hideTimes }) => {
	const navigation = useNavigation<NavigationProp>()
	const speed = useSelector(selectSpeed)
	const trackProgress = useProgress()
	const playerState = usePlaybackState()
	const isPLaying = playerState.state === State.Playing
	const progress = useSharedValue(0)
	const position = useSharedValue(0)
	const cache = useSharedValue(0)
	const duration = useSharedValue(0)

	useEffect(() => {
		cache.value = trackProgress.buffered
		duration.value = trackProgress.duration
		progress.value = withTiming(trackProgress.position, {
			duration: 1000,
			easing: Easing.linear,
		})
	}, [trackProgress])

	const playPause = useCallback(() => {
		isPLaying ? TrackPlayer.pause() : TrackPlayer.play()
	}, [isPLaying])

	const openSpeedModal = useCallback(() => {
		navigation.navigate(SCREENS.AUDIO_SPEED_MODAL)
	}, [])

	const seekBy = useCallback(
		(seconds: number) => () => {
			TrackPlayer.seekBy(seconds)
		},
		[],
	)

	return (
		<View style={styles.width_100}>
			{!hideTimes && (
				<View>
					<TouchableOpacity style={styles.speedBox} onPress={openSpeedModal}>
						<Text weight="600" size="S16">
							{speed}x
						</Text>
					</TouchableOpacity>
					<View style={[styles.row, styles.jc_sb, styles.mb_10, styles.ai_fe]}>
						<Text weight="300" size="S16" color="gray800">
							{secondsToHMS(trackProgress.position)}
						</Text>
						<View style={styles.ai_fe}>
							<Text weight="600" size="S10" color="gray800">
								Demo
							</Text>
							<Text weight="300" size="S16" color="gray800">
								{secondsToHMS(trackProgress.duration)}
							</Text>
						</View>
					</View>
				</View>
			)}
			<Slider
				disable={true}
				progress={progress}
				minimumValue={position}
				maximumValue={duration}
				cache={cache}
				theme={{
					disableMinTrackTintColor: Colors.black,
					maximumTrackTintColor: Colors.gray300,
					minimumTrackTintColor: Colors.black,
					cacheTrackTintColor: Colors.gray500,
					bubbleBackgroundColor: Colors.black,
					heartbeatColor: Colors.black,
				}}
			/>
			{!hideControls && (
				<View style={[styles.row, styles.jc_sb, styles.mt_45]}>
					<Icon name="push-forward" style={styles.rotateY_180} />
					<View style={[styles.row, styles.gap_20]}>
						<Pressable style={styles.row} onPress={seekBy(-30)}>
							<Icon name="seek-seconds" disabled />
							<Text
								weight="600"
								size="S10"
								color="gray800"
								style={{ position: 'absolute', right: '90%' }}
							>
								30
							</Text>
						</Pressable>
						<Icon
							name={isPLaying ? 'pause-control' : 'play-control'}
							onPress={playPause}
						/>
						<Pressable style={styles.row} onPress={seekBy(30)}>
							<Icon name="seek-seconds" style={styles.rotateY_180} disabled />
							<Text
								weight="600"
								size="S10"
								color="gray800"
								style={{ position: 'absolute', left: '90%' }}
							>
								30
							</Text>
						</Pressable>
					</View>
					<Icon name="push-forward" />
				</View>
			)}
		</View>
	)
}

AudioPlayerControl.displayName = 'AudioPlayerControl'
export default AudioPlayerControl
