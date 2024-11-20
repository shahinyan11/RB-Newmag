import React, { FC, useCallback } from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'

import styles from './styles'
import Button from '@/components/Button'
import { goBack } from '@/navigation'
import { useNavigation } from '@react-navigation/native'
import Text from '@/components/Text'
import { useDispatch } from '@/store/hooks'
import { deleteDeliveryAddressReq } from '@/store/user/operations'
import { StackScreenProps } from '@react-navigation/stack'
import { PrivateScreensParamList } from '@/navigation/types'
import { useTranslation } from 'react-i18next'

const DeleteAddressModal: FC<StackScreenProps<PrivateScreensParamList, 'deleteAddress'>> = ({
	route,
}) => {
	const { t } = useTranslation()
	const navigation = useNavigation()
	const dispatch = useDispatch()

	const handleCancel = useCallback(() => {
		navigation.goBack()
	}, [])

	const handleDelete = useCallback(() => {
		dispatch(deleteDeliveryAddressReq(route.params.addressId))
	}, [])

	return (
		<TouchableWithoutFeedback onPress={() => goBack()}>
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={undefined}>
					<View>
						<View style={styles.indicator} />
						<View style={styles.content}>
							<Text size="S20" style={styles.title}>
								{t('modal.areYouSureYouWantToDeleteAddress')}
							</Text>
							<Button
								style={styles.mb_14}
								label={t('button.cancel')}
								onPress={handleCancel}
							/>
							<Button
								label={t('button.delete')}
								onPress={handleDelete}
								type="outline"
							/>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</View>
		</TouchableWithoutFeedback>
	)
}

DeleteAddressModal.displayName = 'DeleteAddressModal'
export default DeleteAddressModal
