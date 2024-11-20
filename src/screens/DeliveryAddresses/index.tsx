import React, { FC } from 'react'
import { FlatList } from 'react-native'

import { useSelector } from '@/store/hooks'
import { selectDeliveryAddresses } from '@/store/user/selectors'
import EmptyAddresses from '@/components/emptyViews/EmptyAddresses'
import AddressCard from '@/components/cards/AddressCard'
import ScreenWrapper from '@/components/ScreenWrapper'
import LocalHeader from './LocalHeader'
import styles from './styles'

const DeliveryAddressesScreen: FC = () => {
	const addresses = useSelector(selectDeliveryAddresses)

	return (
		<ScreenWrapper HeaderComponent={<LocalHeader />} contentContainerStyle={styles.container}>
			<FlatList
				data={addresses}
				renderItem={({ item }) => <AddressCard data={item} containerStyle={styles.ph_10} />}
				contentContainerStyle={[styles.gap_20, styles.flg_1]}
				ListEmptyComponent={EmptyAddresses}
			/>
		</ScreenWrapper>
	)
}

DeliveryAddressesScreen.displayName = 'DeliveryAddressesScreen'
export default DeliveryAddressesScreen
