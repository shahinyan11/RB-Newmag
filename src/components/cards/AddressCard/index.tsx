import React, { FC, useCallback } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { TAddress } from '@/types'
import Pressable from '@/components/Pressable'
import Icon from '@/components/Icon'
import Text from '@/components/Text'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from '@/navigation/types'
import SCREENS from '@/navigation/SCREENS'
import { useDispatch } from '@/store/hooks'
import { setDefaultDeliveryAddressReq } from '@/store/user/operations'
import { useTranslation } from 'react-i18next'

type AddressCardProps = {
	containerStyle?: StyleProp<ViewStyle>
	data: TAddress
	isDefault?: boolean
	selectable?: boolean
}
const AddressCard: FC<AddressCardProps> = ({ containerStyle, data, selectable = true }) => {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const navigation = useNavigation<NavigationProp>()

	const handlePress = useCallback(() => {
		navigation.navigate(SCREENS.ADD_DELIVERY_ADDRESSES, { address: data })
	}, [])

	const handleSetDefault = useCallback(() => {
		dispatch(setDefaultDeliveryAddressReq(data.id))
	}, [data])

	return (
		<View style={[styles.container, containerStyle]}>
			<Pressable style={[styles.row, styles.jc_sb, styles.mb_14]} onPress={handlePress}>
				<Text>{data.address_name}</Text>
				<Icon name="chevron-right" style={styles.mr_10} />
			</Pressable>
			<View style={styles.line_h} />
			<View style={styles.pv_20}>
				<Text size="S14" style={styles.mb_8}>
					Recipient
				</Text>
				<View style={styles.ml_20}>
					<Text size="S16" weight="300">
						{data.name} {data.surname}
					</Text>
					<Text size="S16" weight="300">
						{data.email}
					</Text>
					<Text size="S16" weight="300">
						{data.phone_number}
						{/*+374 (77) 111-231*/}
					</Text>
				</View>
			</View>
			<View style={styles.line_h} />
			<View style={styles.pv_20}>
				<Text size="S14" style={styles.mb_8}>
					{t('common.address')}
				</Text>
				<View style={styles.ml_20}>
					<Text size="S16" weight="300">
						Հասցե՝ {data.street} {data.apartment}, {data.city}, {data.postal_code},{' '}
						{data.company_name}
					</Text>
				</View>
			</View>
			<View style={styles.line_h} />

			{selectable && (
				<View style={[styles.pv_10, styles.row, styles.jc_fe, styles.gap_10]}>
					<Text size="S14" weight="300">
						{t('common.isDefault')}
					</Text>
					<Pressable style={styles.checkbox} onPress={handleSetDefault}>
						{data.is_default && <View style={styles.checkboxInner} />}
					</Pressable>
				</View>
			)}
		</View>
	)
}

AddressCard.displayName = 'AddressCard'
export default AddressCard
