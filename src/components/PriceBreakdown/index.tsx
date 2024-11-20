import React, { FC } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import Text from '@/components/Text'
import styles from '@/styles'
import { useSelector } from '@/store/hooks'
import { selectCartTotals } from '@/store/shopping/selectors'
import { useTranslation } from 'react-i18next'

type PriceBreakdownProps = {
	containerStyle?: StyleProp<ViewStyle>
}

const PriceBreakdown: FC<PriceBreakdownProps> = ({ containerStyle }) => {
	const { t } = useTranslation()
	const totals = useSelector(selectCartTotals)

	return (
		<View style={[styles.gap_8, containerStyle]}>
			<Text size="S14">Sum</Text>
			<View style={[styles.pl_20, styles.gap_8]}>
				<Text weight="300">{t('common.onlinePayment')}</Text>
				<View style={styles.row}>
					<Text weight="300" style={styles.mr_a}>
						{t('common.products')}
					</Text>
					<Text>{totals.productPrice} ֏</Text>
				</View>
				<View style={styles.row}>
					<Text weight="300" style={styles.mr_a}>
						{t('common.delivery')}
					</Text>
					<Text>{totals.deliveryPrice} ֏</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.mr_a}>{t('common.total')}</Text>
					<Text>{totals.totalPrice} ֏</Text>
				</View>
			</View>
		</View>
	)
}

PriceBreakdown.displayName = 'PriceBreakdown'
export default PriceBreakdown
