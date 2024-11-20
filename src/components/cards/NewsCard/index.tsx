import { Image, StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native'

import { TNews } from '@/types'
import styles from './styles'
import Icon from '@/components/Icon'
import formatDate from '@/utils/formatDate'
import { useNavigation } from '@react-navigation/native'
import type { NavigationProp } from '@/navigation/types'
import SCREENS from '@/navigation/SCREENS'
import * as CONST from '@/constants/CONST'
import Text from '@/components/Text'

type NewsCardProps = {
	containerStyle?: StyleProp<ViewStyle>
	data: TNews
}

function NewsCard({ containerStyle, data }: NewsCardProps) {
	const navigation = useNavigation<NavigationProp>()

	const handlePress = () => navigation.navigate(SCREENS.SINGLE_NEWS, { newsId: data.id ?? '' })

	return (
		<TouchableOpacity
			style={[styles.container, containerStyle]}
			activeOpacity={CONST.ACTIVE_OPACITY}
			onPress={handlePress}
		>
			<Image source={{ uri: data.image }} style={styles.image} />
			<View style={styles.row}>
				<Icon style={styles.mr_6} name="calendar" />
				<Text size="S14" color="gray800">
					{formatDate(+data.created_at)}
				</Text>
			</View>
			<Text size="S18">{data.name}</Text>
		</TouchableOpacity>
	)
}

NewsCard.displayName = 'NewsCard'
export default NewsCard
