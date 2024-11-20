import React, { FC, useEffect } from 'react'
import { FlatList } from 'react-native'
import _ from 'lodash'
import { useTranslation } from 'react-i18next'

import ScreenWrapper from '@/components/ScreenWrapper'
import Header from '@/components/Header'
import styles from '@/styles'
import CartItem from '@/components/CartItem'
import { useDispatch, useSelector } from '@/store/hooks'
import { getCartReq } from '@/store/shopping/operations'
import { selectCart } from '@/store/shopping/selectors'
import EmptyCart from '@/components/emptyViews/EmptyCart'
import ListFooter from '@/screens/Cart/ListFooter'

const CartScreen: FC = () => {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const cart = useSelector(selectCart)

	useEffect(() => {
		dispatch(getCartReq())
	}, [])

	return (
		<ScreenWrapper
			HeaderComponent={<Header title={t('common.cart')} />}
			contentContainerStyle={[styles.pv_20, styles.bgc_gray100]}
		>
			<FlatList
				data={cart?.products}
				ListEmptyComponent={EmptyCart}
				renderItem={({ item }) => <CartItem data={item} />}
				contentContainerStyle={styles.flg_1}
				ListFooterComponent={!_.isEmpty(cart?.products) ? <ListFooter /> : undefined}
			/>
		</ScreenWrapper>
	)
}

CartScreen.displayName = 'CartScreen'
export default CartScreen
