import { Image, Text } from 'react-native'

import { TChannel } from '@/types'
import styles from './styles'
import SCREENS from '@/navigation/SCREENS'
import { useNavigation } from '@react-navigation/native'
import type { NavigationProp } from '@/navigation/types'
import Pressable from '@/components/Pressable'

type ChannelCardMiniProps = TChannel

function ChannelCardMini({ title, image, id }: ChannelCardMiniProps) {
	const navigation = useNavigation<NavigationProp>()

	const handlePress = () => navigation.navigate(SCREENS.SINGLE_CHANNEL, { channelId: id })

	return (
		<Pressable style={styles.container} onPress={handlePress}>
			<Image style={styles.image} source={{ uri: image }} />
			<Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
				{title}
			</Text>
		</Pressable>
	)
}

ChannelCardMini.displayName = 'ChannelCardMini'
export default ChannelCardMini
