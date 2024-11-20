import TrackPlayer, { Capability, Event } from 'react-native-track-player'
import store from '@/store'
import { updateAudioPlayer } from '@/store/audioPlayer'

export const PlaybackService = async function () {
	TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play())

	TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause())
	TrackPlayer.addEventListener(Event.PlaybackActiveTrackChanged, event => {
		store.dispatch(updateAudioPlayer({ currentTrack: event.track }))
	})

	TrackPlayer.updateOptions({
		// Media controls capabilities
		capabilities: [
			Capability.Play,
			Capability.Pause,
			Capability.Stop,
			Capability.JumpForward,
			Capability.JumpBackward,
			Capability.SkipToNext,
			Capability.SkipToPrevious,
		],
		// Capabilities that will show up when the notification is in the compact form on Android
		compactCapabilities: [
			Capability.Play,
			Capability.Pause,
			Capability.Stop,
			Capability.JumpForward,
			Capability.JumpBackward,
			Capability.SkipToNext,
			Capability.SkipToPrevious,
		],
	})
}
