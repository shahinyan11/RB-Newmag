import React, { FC, useCallback, useMemo } from 'react'
import { View } from 'react-native'
import Colors from '@/theme/colors'
import { TProduct } from '@/types'
import { SIZES } from '@/constants/SIZES'
import { useDispatch } from '@/store/hooks'
import ProductItem from '@/components/ProductItem'
import Text from '@/components/Text'
import Icon from '@/components/Icon'
import styles from './styles'
import { removeFromCartReq, updateQuantityReq } from '@/store/shopping/operations'
import { useTranslation } from 'react-i18next'
import { BOOK_TYPES } from '@/constants/CONST'

type CartItemProps = {
	data: TProduct
}

const CartItem: FC<CartItemProps> = ({ data }) => {
	const { t } = useTranslation()
	const dispatch = useDispatch()

	const handleRemove = useCallback(() => {
		dispatch(removeFromCartReq({ id: data.book_id, type: data.type }))
	}, [])

	const handleChangeQuantity = useCallback(
		(action: 'plus' | 'minus') => () => {
			const quantity = action === 'plus' ? +data.quantity + 1 : +data.quantity - 1
			dispatch(updateQuantityReq({ id: data.book_id, type: data.type, quantity }))
		},
		[data.quantity],
	)

	const { canIncreaseCount, canDeceaseCount } = useMemo(() => {
		return {
			canIncreaseCount:
				data.type !== BOOK_TYPES.DIGITAL_BOOK &&
				Number(data.quantity) < Number(data?.in_stock),
			canDeceaseCount:
				data.type !== BOOK_TYPES.DIGITAL_BOOK && data.quantity && +data.quantity > 1,
		}
	}, [data])

	return (
		<View style={styles.container}>
			<Text size="S14" numberOfLines={2} ellipsizeMode="tail" style={styles.mb_20}>
				{data.book_name}
			</Text>
			<ProductItem
				hideTitle
				hideDate
				hideCount
				data={data}
				containerStyle={styles.productItemContainer}
			/>
			<View style={styles.bottomContainer}>
				<View style={styles.row}>
					<Icon name="action-trash" style={styles.mr_8} onPress={handleRemove} />
					<Text size="S14" weight="300">
						{t('common.remove')}
					</Text>
				</View>
				<View style={styles.row}>
					<Text size="S14" weight="300" style={styles.mr_8}>
						{t('common.quantity')}:
					</Text>
					<View style={styles.countControl}>
						<Icon
							name="chevron-up"
							size={SIZES.S24}
							onPress={handleChangeQuantity('plus')}
							color={canIncreaseCount ? Colors.black : Colors.gray600}
							disabled={!canIncreaseCount}
						/>
						<Text weight="700">{data.quantity || 1}</Text>
						<Icon
							name="chevron-down"
							size={SIZES.S24}
							color={canDeceaseCount ? Colors.black : Colors.gray600}
							disabled={!canDeceaseCount}
							onPress={handleChangeQuantity('minus')}
						/>
					</View>
				</View>
			</View>
		</View>
	)
}

CartItem.displayName = 'CartItem'
export default CartItem
