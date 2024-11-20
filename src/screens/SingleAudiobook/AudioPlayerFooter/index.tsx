import React, { FC, useCallback } from 'react'
import { View } from 'react-native'
import TrackPlayer from 'react-native-track-player'
import Colors from '@/theme/colors'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import styles from './styles'
import { useTranslation } from 'react-i18next'

type AudioPlayerFooterProps = {
	isPlaying: boolean
	isSmall: boolean
	price?: string
	onPress: () => void
}

const AudioPlayerFooter: FC<AudioPlayerFooterProps> = ({ isPlaying, isSmall, price, onPress }) => {
	const { t } = useTranslation()

	const handlePlayPause = useCallback(() => {
		isPlaying ? TrackPlayer.pause() : TrackPlayer.play()
	}, [isPlaying])

	return (
		<View style={styles.buttonsContainer}>
			{isSmall && (
				<Button
					addBefore={() => (
						<Icon
							name={isPlaying ? 'pause' : 'play'}
							color={Colors.white}
							disabled={true}
						/>
					)}
					style={styles.fl_1}
					label={t(isPlaying ? 'button.pauseDemo' : 'button.playDemo')}
					onPress={handlePlayPause}
				/>
			)}
			<Button
				style={styles.fl_1}
				type="danger"
				label={isSmall ? t('button.buy') : `${t('button.buyFullVersion')}  ${price} ֏`}
				onPress={onPress}
			/>
		</View>
	)
}

AudioPlayerFooter.displayName = 'AudioPlayerFooter'
export default AudioPlayerFooter
