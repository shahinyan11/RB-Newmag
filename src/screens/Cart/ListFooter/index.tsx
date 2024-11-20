import React, { FC, useCallback } from 'react'
import styles from './styles'
import { View } from 'react-native'
import PriceBreakdown from '@/components/PriceBreakdown'
import Button from '@/components/Button'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from '@/navigation/types'
import SCREENS from '@/navigation/SCREENS'
import Text from '@/components/Text'
import { useSelector } from '@/store/hooks'
import { selectSelectedDeliveryAddress } from '@/store/user/selectors'
import AddressCard from '@/components/cards/AddressCard'
import { useTranslation } from 'react-i18next'

const ListFooter: FC = () => {
	const { t } = useTranslation()
	const navigation = useNavigation<NavigationProp>()
	const deliveryAddress = useSelector(selectSelectedDeliveryAddress)

	const addOrChooseAddress = useCallback(() => {
		navigation.navigate(
			deliveryAddress ? SCREENS.DELIVERY_ADDRESSES : SCREENS.ADD_DELIVERY_ADDRESSES,
		)
	}, [])

	return (
		<View>
			<Text size="S18" color="gray600" style={styles.sectionTitle}>
				{t('common.delivery')}
			</Text>
			<View style={styles.deliveryContainer}>
				{deliveryAddress ? (
					<AddressCard data={deliveryAddress} selectable={false} />
				) : (
					<Text size="S17" style={[styles.ta_c, styles.mt_30]}>
						{t('common.youHaveNoDeliveryAddresses')}
					</Text>
				)}

				<Button
					type="outline"
					label={t(
						deliveryAddress
							? 'button.chooseAnotherAddress'
							: 'button.addDeliveryAddress',
					)}
					onPress={addOrChooseAddress}
				/>
			</View>
			<View style={[styles.p_10, styles.bgc_white]}>
				<PriceBreakdown />
				<Button
					label={t('common.checkout')}
					style={styles.mt_20}
					onPress={() => navigation.navigate(SCREENS.CHECKOUT)}
				/>
			</View>
		</View>
	)
}

ListFooter.displayName = 'ListFooter'
export default ListFooter
