import { FC } from 'react'
import { View } from 'react-native'

import Header from '@/components/Header'
import Icon from '@/components/Icon'
import Text from '@/components/Text'
import styles from '@/styles'
import { useTranslation } from 'react-i18next'

type LocalHeaderProps = {
	onPress: () => void
}

const LocalHeader: FC<LocalHeaderProps> = ({ onPress }) => {
	const { t } = useTranslation()

	return (
		<Header
			style={styles.ph_10}
			title={t('common.back')}
			RightComponent={
				<View style={[styles.row, styles.gap_10]}>
					<Text size="S14" weight="300" color="gray800">
						{t('common.textSettings')}
					</Text>
					<Icon name="settings" onPress={onPress} />
				</View>
			}
		/>
	)
}

LocalHeader.displayName = 'LocalHeader'
export default LocalHeader
