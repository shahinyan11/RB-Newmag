import { FC, useCallback } from 'react'
import { FlatList, Image, View } from 'react-native'
import styles from '@/screens/Checkout/styles'
import Text from '@/components/Text'
import RoundCheckbox from '@/components/RoundCheckbox'
import { useDispatch, useSelector } from '@/store/hooks'
import { selectPaymentMethods, selectSelectedPaymentMethod } from '@/store/app/selectors'
import { TPaymentMethod } from '@/types'
import { updateAppState } from '@/store/app'
import { useTranslation } from 'react-i18next'

const PaymentMethods: FC = () => {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const paymentMethods = useSelector(selectPaymentMethods)
	const selectedPaymentMethod = useSelector(selectSelectedPaymentMethod)

	const handleSelect = useCallback(
		(id: string) => (val?: boolean) => {
			dispatch(updateAppState({ selectedPaymentMethod: val ? id : undefined }))
		},
		[],
	)

	const renderItem = useCallback(
		({ item }: { item: TPaymentMethod }) => (
			<View style={[styles.row, styles.ph_10, styles.jc_sb]}>
				<View style={[styles.jc_sb, styles.pv_20, styles.fl_1]}>
					<Text style={styles.mb_20}>{item.name}</Text>
					<View style={[styles.row, styles.gap_14, styles.gap_14]}>
						{item.images?.map(val => (
							<Image style={styles.image} source={{ uri: val }} />
						))}
					</View>
				</View>
				<View style={[styles.height_100, styles.jc_c, styles.ai_c]}>
					<RoundCheckbox
						containerStyle={styles.mt_25}
						onToggle={handleSelect(item.id)}
						externalChecked={selectedPaymentMethod === item.id}
					/>
					<Text size="S14" weight="300" style={styles.mt_4}>
						{t('common.selected')}
					</Text>
				</View>
			</View>
		),
		[selectedPaymentMethod],
	)

	return (
		<View style={styles.bgc_white}>
			{
				<FlatList
					scrollEnabled={false}
					data={paymentMethods}
					renderItem={renderItem}
					ItemSeparatorComponent={() => <View style={styles.line_h} />}
				/>
			}
		</View>
	)
}

PaymentMethods.displayName = 'PaymentMethods'
export default PaymentMethods
