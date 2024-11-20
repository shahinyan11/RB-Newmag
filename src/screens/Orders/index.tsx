import React, { FC, useCallback, useEffect } from 'react'
import { SectionList } from 'react-native'

import ScreenWrapper from '@/components/ScreenWrapper'
import Text from '@/components/Text'
import { Section, TGroupedOrders, TOrder } from '@/types'
import OrderCard from '@/components/cards/OrderCard'
import EmptyOrders from '@/components/emptyViews/EmptyOrders'
import LocalHeader from './LocalHeader'
import styles from './styles'
import { useDispatch, useSelector } from '@/store/hooks'
import { getOrdersReq } from '@/store/user/operations'
import { selectOrders } from '@/store/user/selectors'
import { selectIsLoading } from '@/store/app/selectors'
import { ordersEndpoint } from '@/store/user/endpoints'

const OrdersScreen: FC = () => {
	const dispatch = useDispatch()
	const orders = useSelector(selectOrders)
	const isLoading = useSelector(selectIsLoading(ordersEndpoint.endpoint))

	useEffect(() => {
		dispatch(getOrdersReq())
	}, [])

	const renderItem = useCallback(({ item }: { item: TOrder }) => <OrderCard data={item} />, [])

	const renderSectionHeader = useCallback(
		({ section: { date } }: Section<TGroupedOrders[number]>) => (
			<Text style={styles.sectionTitle} size="S12" color="gray800">
				{date}
			</Text>
		),
		[],
	)

	return (
		<ScreenWrapper HeaderComponent={<LocalHeader />}>
			<SectionList
				sections={orders}
				renderItem={renderItem}
				renderSectionHeader={renderSectionHeader}
				contentContainerStyle={styles.container}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={!isLoading ? EmptyOrders : null}
			/>
		</ScreenWrapper>
	)
}

OrdersScreen.displayName = 'OrdersScreen'
export default OrdersScreen
