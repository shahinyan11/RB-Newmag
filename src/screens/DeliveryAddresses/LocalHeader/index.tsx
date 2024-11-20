import React, { FC } from 'react'

import Header from '@/components/Header'
import Icon from '@/components/Icon'
import { useNavigation } from '@react-navigation/native'
import SCREENS from '@/navigation/SCREENS'
import { NavigationProp } from '@/navigation/types'
import styles from '@/styles'
import { useTranslation } from 'react-i18next'

const LocalHeader: FC = () => {
	const { t } = useTranslation()
	const navigation = useNavigation<NavigationProp>()

	const handlePress = () => {
		navigation.navigate(SCREENS.ADD_DELIVERY_ADDRESSES)
	}

	return (
		<Header
			title={t('common.deliveryAddresses')}
			RightComponent={<Icon name="plus" onPress={handlePress} style={styles.mr_10} />}
		/>
	)
}

LocalHeader.displayName = 'LocalHeader'
export default LocalHeader
