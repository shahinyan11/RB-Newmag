import React, { FC } from 'react'
import { Image, View } from 'react-native'
import styles from './styles'
import Text from '@/components/Text'
import { useSelector } from 'react-redux'
import { selectLatestNews } from '@/store/news/selectors'
import Icon from '@/components/Icon'
import formatDate from '@/utils/formatDate'
import Colors from '@/theme/colors'

const ListHeader: FC = () => {
	const news = useSelector(selectLatestNews)[1]

	return (
		<View>
			<Image source={{ uri: news?.image }} style={styles.image} />
			<View style={styles.absoluteText}>
				<Text size="S28" weight="600" color="white" style={styles.mb_20}>
					{news?.name}
				</Text>
				<View style={styles.row}>
					<Icon style={styles.icon} name="calendar" color={Colors.white} />
					<Text size="S14" color="white">
						{formatDate(+news?.created_at)}
					</Text>
				</View>
			</View>
		</View>
	)
}

ListHeader.displayName = 'ListHeader'
export default ListHeader
