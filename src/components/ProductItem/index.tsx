import React, { FC } from 'react'
import { Image, StyleProp, View, ViewStyle } from 'react-native'

import Text from '@/components/Text'
import { TCartItem } from '@/types'
import styles from './styles'
import formatDate from '@/utils/formatDate'
import getAuthorName from '@/utils/getAuthorName'
import { useTranslation } from 'react-i18next'

type ProductItemProps = {
	containerStyle?: StyleProp<ViewStyle>
	data: TCartItem
	hideTitle?: boolean
	hideDate?: boolean
	hideCount?: boolean
}

const ProductItem: FC<ProductItemProps> = ({
	containerStyle,
	data,
	hideTitle,
	hideDate,
	hideCount,
}) => {
	const { t } = useTranslation()

	return (
		<View style={[styles.container, containerStyle]}>
			<Image source={{ uri: data.image }} style={styles.image} />

			<View style={styles.rightContainer}>
				<View style={styles.blackBubble}>
					<Text style={styles.tt_u} size="S10" color="white">
						{data.type}
					</Text>
				</View>
				{!hideDate && (
					<Text size="S12" weight="300">
						{formatDate(+(data?.created_at ?? 0), 'YYYY.MM.DD / HH:MM')}
					</Text>
				)}

				<Text size="S14" weight="300" color="gray700">
					{t('common.price')}:
					<Text size="S14" color="red500">
						{data.price} ֏
					</Text>
				</Text>
				{!hideTitle && (
					<Text size="S14" numberOfLines={2} ellipsizeMode="tail">
						{data.book_name}
					</Text>
				)}
				<Text size="S14" weight="300" color="gray700">
					{getAuthorName(data)}
				</Text>
				{!hideCount && (
					<Text size="S14" weight="300" color="gray700">
						{t('common.quantity')}:<Text size="S14">{data.quantity}</Text>
					</Text>
				)}
			</View>
		</View>
	)
}

ProductItem.displayName = 'ProductItem'
export default ProductItem
