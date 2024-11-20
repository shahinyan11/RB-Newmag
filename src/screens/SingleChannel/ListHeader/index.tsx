import React, { FC } from 'react'
import { Image, View } from 'react-native'
import styles from './styles'
import Text from '@/components/Text'
import { useSelector } from '@/store/hooks'
import { selectCurrentChannel } from '@/store/channels/selectors'
import { t } from '@/i18n'

const ListHeader: FC = () => {
	const channel = useSelector(selectCurrentChannel)
	return (
		<View>
			<Image source={{ uri: channel?.image }} style={styles.image} />
			<View style={[styles.gap_6, styles.pv_6, styles.ph_10]}>
				<Text size="S20" weight="600">
					{channel?.title}
				</Text>
				<Text size="S20" weight="600">
					{channel?.episodes_count} {t('common.episodes')}
				</Text>
				{/*<Text size="S14" style={styles.mr_20}>*/}
				{/*	{t('common.updated')}: Today*/}
				{/*</Text>*/}
			</View>
		</View>
	)
}

ListHeader.displayName = 'ListHeader'
export default ListHeader
