import { FlatList, StyleProp, TextStyle, View, ViewStyle } from 'react-native'
import styles from './styles'
import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from '@/navigation/types'
import SCREENS from '@/navigation/SCREENS'
import { TOrder } from '@/types'
import Text from '@/components/Text'
import Icon from '@/components/Icon'
import ProductItem from '@/components/ProductItem'
import { useTranslation } from 'react-i18next'

type OrderCardProps = {
	containerStyle?: StyleProp<ViewStyle>
	priceStyle?: StyleProp<TextStyle>
	hideHeader?: boolean
	hideFooter?: boolean
	data: TOrder
}

function OrderCard({ containerStyle, priceStyle, hideHeader, hideFooter, data }: OrderCardProps) {
	const { t } = useTranslation()
	const navigation = useNavigation<NavigationProp>()

	const handlePress = useCallback(() => {
		navigation.navigate(SCREENS.SINGLE_ORDER, { order: data })
	}, [])

	return (
		<View style={[styles.container, containerStyle]}>
			{!hideHeader && (
				<>
					<View style={[styles.row, styles.pv_16, styles.gap_10]}>
						<Text>№ {data.order_id}</Text>
						<Text
							size="S12"
							color="white"
							style={[styles.status, { backgroundColor: data.status.color }]}
						>
							{data.status.text}
						</Text>
						<Icon name="chevron-right" style={styles.mr_10} onPress={handlePress} />
					</View>
					<View style={styles.line_h} />
				</>
			)}
			<FlatList
				data={data.items}
				scrollEnabled={false}
				ItemSeparatorComponent={() => <View style={[styles.line_h]} />}
				renderItem={({ item }) => <ProductItem data={item} containerStyle={styles.pv_20} />}
			/>
			{!hideFooter && (
				<>
					<View style={styles.line_h} />
					<View style={[styles.row, styles.jc_fe, styles.mt_10]}>
						<Text>
							{t('common.total')}: <Text>{data.total_price} ֏</Text>
						</Text>
					</View>
				</>
			)}
		</View>
	)
}

OrderCard.displayName = 'OrderCard'
export default OrderCard
