import { useCallback } from 'react'
import { Image, StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TAudiobook } from '@/types'
import * as CONST from '@/constants/CONST'
import { NavigationProp } from '@/navigation/types'
import SCREENS from '@/navigation/SCREENS'
import Icon from '@/components/Icon'
import styles from './styles'
import getAuthorName from '@/utils/getAuthorName'
import { useTranslation } from 'react-i18next'

type AudioBookCardProps = {
	containerStyle?: StyleProp<ViewStyle>
	priceStyle?: StyleProp<TextStyle>
	data: TAudiobook
	hidePrice?: boolean
	onPress?: () => void
}

function AudioBookCard({
	containerStyle,
	priceStyle,
	data,
	hidePrice,
	onPress,
}: AudioBookCardProps) {
	const { t } = useTranslation()
	const navigation = useNavigation<NavigationProp>()

	const handlePress = useCallback(() => {
		navigation.navigate(SCREENS.SINGLE_AUDIOBOOK, { bookId: data.book_id })
	}, [])

	return (
		<TouchableOpacity
			style={[styles.container, containerStyle]}
			activeOpacity={CONST.ACTIVE_OPACITY}
			onPress={onPress ?? handlePress}
		>
			<View style={styles.leftContainer}>
				<Image source={{ uri: data.image }} style={styles.image} />
				<Icon name="headphone" style={styles.icon} />
			</View>
			<View style={styles.rightContainer}>
				<Text style={styles.title}>{data.book_name}</Text>
				<Text style={styles.author}>{getAuthorName(data)}</Text>
				<View style={styles.durationContainer}>
					<Icon name="clock" />
					<Text style={styles.durationText}>{data.duration}</Text>
				</View>
				{!hidePrice && (
					<Text style={styles.priceLabel}>
						{t('common.price')}:{' '}
						<Text style={[styles.price, priceStyle]}>{data.price} ֏</Text>
					</Text>
				)}
			</View>
		</TouchableOpacity>
	)
}

AudioBookCard.displayName = 'AudioBookCard'
export default AudioBookCard
