import React, { FC, useCallback } from 'react'
import { Image, StyleProp, View, ViewStyle } from 'react-native'

import styles from './styles'
import Text from '@/components/Text'
import Icon from '@/components/Icon'
import Colors from '@/theme/colors'
import TrackPlayer from 'react-native-track-player'
import Pressable from '@/components/Pressable'

type BigPreviewProps = {
	containerStyle?: StyleProp<ViewStyle>
	data?: {
		image?: string
		title?: string
		author?: string
	}
	onPress?: () => void
	onClose?: () => void
}

const SmallPreview: FC<BigPreviewProps> = ({ containerStyle, data, onPress, onClose }) => {
	const handleClose = useCallback(() => {
		TrackPlayer.reset()
		onClose?.()
	}, [onClose])

	return (
		<Pressable style={[styles.container, containerStyle]} onPress={onPress}>
			<Image style={styles.image} source={{ uri: data?.image }} />
			<View style={[styles.fl_1, styles.gap_6, styles.mr_24]}>
				<Text weight="600" size="S14" color="black" numberOfLines={1} ellipsizeMode="tail">
					{data?.title}
				</Text>
				<Text
					weight="300"
					size="S12"
					color="gray800"
					numberOfLines={1}
					ellipsizeMode="tail"
				>
					{data?.author}
				</Text>
			</View>

			<View style={styles.mr_24}>
				<Icon name="close" color={Colors.black} size={25} onPress={handleClose} />
			</View>
		</Pressable>
	)
}

SmallPreview.displayName = 'SmallPreview'
export default SmallPreview
