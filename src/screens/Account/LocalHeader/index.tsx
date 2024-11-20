import { FC, useCallback } from 'react'
import { View } from 'react-native'
import { useTranslation } from 'react-i18next'

import Header from '@/components/Header'
import Icon from '@/components/Icon'
import Text from '@/components/Text'
import styles from '@/styles'
import { useDispatch } from '@/store/hooks'
import { logoutReq } from '@/store/auth/operations'

const LocalHeader: FC = () => {
	const { t } = useTranslation()
	const dispatch = useDispatch()

	const handlePress = useCallback(() => {
		dispatch(logoutReq())
	}, [])

	return (
		<Header
			style={styles.ph_10}
			title={t('common.back')}
			RightComponent={
				<View style={[styles.row, styles.gap_10]}>
					<Text size="S14" weight="300" color="gray800">
						{t('common.signOut')}
					</Text>
					<Icon name="logout" onPress={handlePress} />
				</View>
			}
		/>
	)
}

LocalHeader.displayName = 'LocalHeader'
export default LocalHeader
