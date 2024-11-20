import React, { FC } from 'react'

import ScreenWrapper from '@/components/ScreenWrapper'
import Text from '@/components/Text'
import styles from './styles'
import { PrivateScreensParamList } from '@/navigation/types'
import OrderCard from '@/components/cards/OrderCard'
import Header from '@/components/Header'
import { ScrollView, View } from 'react-native'
import Icon from '@/components/Icon'
import { StackScreenProps } from '@react-navigation/stack'
import { useSelector } from '@/store/hooks'
import { selectPaymentMethodById } from '@/store/app/selectors'
import { useTranslation } from 'react-i18next'

const SingleOrderScreen: FC<StackScreenProps<PrivateScreensParamList, 'singleOrder'>> = ({
	route,
}) => {
	const { t } = useTranslation()
	const order = route.params?.order
	const paymentMethod = useSelector(selectPaymentMethodById(order?.payment_method_id))

	return (
		<ScreenWrapper HeaderComponent={<Header title={`Order № ${order?.order_id}`} />}>
			<ScrollView style={styles.fl_1} contentContainerStyle={styles.container}>
				<Text style={styles.sectionTitle}>{t('common.orderInfo')}</Text>
				{order && <OrderCard data={order} hideHeader hideFooter />}
				<View style={[styles.bgc_white, styles.ph_10, styles.mt_20]}>
					<View style={styles.pv_20}>
						<Text size="S14" style={styles.mb_8}>
							Recipient
						</Text>
						<View style={styles.ml_20}>
							<Text size="S16" weight="300">
								{order?.name} {order?.surname}
							</Text>
							<Text size="S16" weight="300">
								{order?.email}
							</Text>
							<Text size="S16" weight="300">
								{/*+374 (77) 111-231*/}
								{order?.phone_number}
							</Text>
						</View>
					</View>
					<View style={styles.line_h} />
					<View style={styles.pv_20}>
						<Text size="S14" style={styles.mb_8}>
							Delivery
						</Text>
						<View style={styles.ml_20}>
							<Text size="S16" weight="300">
								Հասցե՝ {order?.street} {order?.apartment}, {order?.city},{' '}
								{order?.postal_code}
							</Text>
						</View>
					</View>
					<View style={styles.line_h} />
					<View style={styles.pv_20}>
						<Text size="S14" style={styles.mb_8}>
							Summ
						</Text>
						<View style={[styles.ml_20, styles.gap_8]}>
							<View style={[styles.row, styles.jc_sb]}>
								<Text size="S16" weight="300">
									Paymant
								</Text>
								<Text size="S16">{paymentMethod?.name}</Text>
							</View>
							<View style={[styles.row, styles.jc_sb]}>
								<Text size="S16" weight="300">
									Products
								</Text>
								<Text size="S16">{order?.total_price} ֏</Text>
							</View>
							<View style={[styles.row, styles.jc_sb]}>
								<Text size="S16" weight="300">
									Delivery
								</Text>
								<Text size="S16">{order?.total_shipping || 0} ֏</Text>
							</View>
							<View style={[styles.row, styles.jc_sb]}>
								<Text size="S16">Total</Text>
								<Text size="S16">
									{Number(order?.total_price) + Number(order?.total_shipping)} ֏
								</Text>
							</View>
						</View>
					</View>
				</View>
				<View style={styles.infoBlock}>
					<Icon name="info" />
					<Text weight="300">{t('common.audiobooksAreNotCounted')}</Text>
				</View>
			</ScrollView>
		</ScreenWrapper>
	)
}

SingleOrderScreen.displayName = 'SingleOrderScreen'
export default SingleOrderScreen
