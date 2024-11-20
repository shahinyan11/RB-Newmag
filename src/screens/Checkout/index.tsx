import React, { FC } from 'react'
import { FlatList, ScrollView, View } from 'react-native'

import ScreenWrapper from '@/components/ScreenWrapper'
import Header from '@/components/Header'
import ProductItem from '@/components/ProductItem'
import styles from './styles'
import Text from '@/components/Text'
import Button from '@/components/Button'
import PaymentMethods from './PaymentMethods'
import PriceBreakdown from '@/components/PriceBreakdown'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from '@/navigation/types'
import SCREENS from '@/navigation/SCREENS'
import { useSelector } from '@/store/hooks'
import { selectCart } from '@/store/shopping/selectors'
import { useTranslation } from 'react-i18next'

const CheckoutScreen: FC = () => {
	const { t } = useTranslation()
	const navigation = useNavigation<NavigationProp>()
	const cart = useSelector(selectCart)

	return (
		<ScreenWrapper HeaderComponent={<Header title={t('common.checkout')} />}>
			<ScrollView style={styles.fl_1} contentContainerStyle={styles.bgc_gray100}>
				<Text size="S18" color="gray600" style={styles.sectionTitle}>
					{t('common.products')}
				</Text>
				<FlatList
					data={cart?.products}
					renderItem={({ item }) => <ProductItem data={item} />}
					contentContainerStyle={styles.productsContainer}
					scrollEnabled={false}
				/>
				{/*<Text size="S18" color="gray600" style={styles.sectionTitle}>*/}
				{/*	{t('common.delivery')}*/}
				{/*</Text>*/}
				{/*<View style={styles.deliveryContainer}>*/}
				{/*	<Text size="S17" style={styles.ta_c}>*/}
				{/*		{t('common.youHaveNoDeliveryAddresses')}*/}
				{/*	</Text>*/}
				{/*	<Button type="outline" label={t('common.addDeliveryAddress')} />*/}
				{/*</View>*/}
				<Text size="S18" color="gray600" style={styles.sectionTitle}>
					{t('common.paymentMethods')}
				</Text>
				<PaymentMethods />
				<Text size="S18" color="gray600" style={styles.sectionTitle}>
					{t('common.total')}
				</Text>
				<View style={[styles.bgc_white, styles.ph_10, styles.pv_20]}>
					<PriceBreakdown />
					<Button
						style={styles.mt_20}
						label={t('common.pay')}
						onPress={() => navigation.navigate(SCREENS.PAYMENT)}
					/>
				</View>
			</ScrollView>
		</ScreenWrapper>
	)
}

CheckoutScreen.displayName = 'CheckoutScreen'
export default CheckoutScreen
