import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'

import Header from '@/components/Header'
import Icon from '@/components/Icon'
import SCREENS from '@/navigation/SCREENS'
import { NavigationProp } from '@/navigation/types'
import styles from '@/styles'

type LocalHeaderProps = {
	addressId?: string
}

const LocalHeader: FC<LocalHeaderProps> = ({ addressId }) => {
	const { t } = useTranslation()
	const navigation = useNavigation<NavigationProp>()

	const handlePress = () => {
		navigation.navigate(SCREENS.DELETE_ADDRESS, { addressId })
	}

	return (
		<Header
			title={t(addressId ? 'common.editDeliveryAddress' : 'common.addDeliveryAddress')}
			RightComponent={
				addressId && <Icon name="action-trash" onPress={handlePress} style={styles.mr_10} />
			}
		/>
	)
}

LocalHeader.displayName = 'LocalHeader'
export default LocalHeader
