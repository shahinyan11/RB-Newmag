import { View } from 'react-native'
import styles from './styles'
import YoutubePlayer from 'react-native-youtube-iframe'
import { RW } from '@/theme'
import getYouTubeVideoId from '@/utils/getYouTubeVideoId'

type YoutubeVideoPlayerProps = {
	url: string
}

function YoutubeVideoPlayer({ url }: YoutubeVideoPlayerProps) {
	// const [isPlaying, setIsPlaying] = useState(false)

	// const onStateChange = useCallback(state => {
	// 	if (state === 'ended') {
	// 		setIsPlaying(false)
	// 	}
	// }, [])

	// const togglePlaying = useCallback(() => {
	// 	setIsPlaying(prev => !prev)
	// }, [])

	return (
		<View style={styles.container}>
			<YoutubePlayer
				height={RW(200)}
				width={RW(355)}
				play={false}
				videoId={getYouTubeVideoId(url)}
				// onChangeState={onStateChange}
			/>
		</View>
	)
}

YoutubeVideoPlayer.displayName = 'YoutubeVideoPlayer'
export default YoutubeVideoPlayer
