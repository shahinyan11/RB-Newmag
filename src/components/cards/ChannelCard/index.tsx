import { Image, StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native'
import { TChannel } from '@/types'
import { useNavigation } from '@react-navigation/native'
import type { NavigationProp } from '@/navigation/types'
import SCREENS from '@/navigation/SCREENS'
import * as CONST from '@/constants/CONST'
import Text from '@/components/Text'
import styles from './styles'
import { useTranslation } from 'react-i18next'

type ChannelCardProps = {
	containerStyle?: StyleProp<ViewStyle>
	data: TChannel
}

function ChannelCard({ containerStyle, data }: ChannelCardProps) {
	const { t } = useTranslation()
	const navigation = useNavigation<NavigationProp>()

	const handlePress = () => navigation.navigate(SCREENS.SINGLE_CHANNEL, { channelId: data.id })

	return (
		<TouchableOpacity
			style={[styles.container, containerStyle]}
			activeOpacity={CONST.ACTIVE_OPACITY}
			onPress={handlePress}
		>
			<Image source={{ uri: data.image }} style={styles.image} />
			<View style={[styles.row, styles.gap_8]}>
				<Text weight="600" size="S12" color="gray800">
					{data.episodes_count} {t('common.episodes')}
				</Text>
				{/*<View style={styles.dot} />*/}
				{/*<Text weight="600" size="S12" color="gray800">*/}
				{/*	7 {t('common.hoursAgo')}*/}
				{/*</Text>*/}
			</View>

			<Text weight="600" size="S16" color="black" numberOfLines={2} ellipsizeMode="tail">
				{data.title}
			</Text>
			<Text weight="300" size="S14" color="gray800" numberOfLines={2} ellipsizeMode="tail">
				{data.description}
			</Text>
		</TouchableOpacity>
	)
}

ChannelCard.displayName = 'ChannelCard'
export default ChannelCard
