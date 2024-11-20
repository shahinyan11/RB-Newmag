import { Image, StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import * as CONST from '@/constants/CONST'
import type { NavigationProp } from '@/navigation/types'
import SCREENS from '@/navigation/SCREENS'
import { TBook } from '@/types'
import styles from './styles'
import getAuthorName from '@/utils/getAuthorName'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

type BooksCardProps = {
	containerStyle?: StyleProp<ViewStyle>
	data: TBook
	onPress?: () => void
	hidePrice?: boolean
}

function BookCard({ containerStyle, data, onPress, hidePrice }: BooksCardProps) {
	const { t } = useTranslation()
	const navigation = useNavigation<NavigationProp>()

	const handlePress = () =>
		navigation.navigate(SCREENS.SINGLE_BOOK, { bookId: data.book_id ?? '' })

	const authorName = useMemo(() => getAuthorName(data), [data])

	return (
		<TouchableOpacity
			style={[styles.container, containerStyle]}
			activeOpacity={CONST.ACTIVE_OPACITY}
			onPress={onPress ?? handlePress}
		>
			<Image source={{ uri: data.image }} style={styles.image} />
			{!hidePrice && (
				<Text style={styles.priceLabel}>
					{t('common.price')}: <Text style={styles.price}>{data.price} ֏</Text>
				</Text>
			)}
			{data.book_name && <Text style={styles.title}>{data.book_name}</Text>}
			{authorName && <Text style={styles.author}>{authorName}</Text>}
		</TouchableOpacity>
	)
}

BookCard.displayName = 'BookCard'
export default BookCard
