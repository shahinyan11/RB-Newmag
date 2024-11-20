import React, { FC } from 'react'
import { Image, StyleProp, View, ViewStyle } from 'react-native'

import styles from './styles'
import Text from '@/components/Text'
import Icon from '@/components/Icon'

type BigPreviewProps = {
	containerStyle?: StyleProp<ViewStyle>
	data?: {
		image?: string
		title?: string
		author?: string
	}
	onClose?: () => void
}

const BigPreview: FC<BigPreviewProps> = ({ containerStyle, data, onClose }) => {
	return (
		<View style={[styles.width_100, styles.ai_c, containerStyle]}>
			<View style={styles.header}>
				<Icon name="chevron-down" onPress={onClose} />
			</View>
			<Image style={styles.image} source={{ uri: data?.image }} />
			<Text weight="600" size="S22" color="black" style={styles.mb_10}>
				{data?.title}
			</Text>
			<Text weight="300" size="S20" color="gray800" style={styles.mb_20}>
				{data?.author}
			</Text>
		</View>
	)
}

BigPreview.displayName = 'BigPreview'
export default BigPreview
