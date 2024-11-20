import React, { FC, useCallback, useState } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'

import styles from './styles'
import Button from '@/components/Button'
import Checkbox from '@/components/Checkbox'
import { goBack } from '@/navigation'
import { useDispatch } from '@/store/hooks'
import { updateAudioPlayer } from '@/store/audioPlayer'
import { useSelector } from 'react-redux'
import { selectSpeed } from '@/store/audioPlayer/selectors'
import { TBasicOption } from '@/types'
import { useNavigation } from '@react-navigation/native'
import TrackPlayer from 'react-native-track-player'
import { AUDIO_SPEEDS } from '@/constants/CONST'
import { useTranslation } from 'react-i18next'

const AudioSpeedModal: FC = () => {
	const { t } = useTranslation()
	const navigation = useNavigation()
	const dispatch = useDispatch()
	const speed = useSelector(selectSpeed)
	const [selected, setSelected] = useState<TBasicOption>()

	const handleChange = useCallback(
		(item: TBasicOption) => () => {
			setSelected(item)
		},
		[],
	)

	const handleSelect = useCallback(() => {
		TrackPlayer.setRate(selected?.value)
		dispatch(updateAudioPlayer({ speed: selected?.value }))
		navigation.goBack()
	}, [selected])

	return (
		<TouchableWithoutFeedback onPress={() => goBack()}>
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={undefined}>
					<View>
						<View style={styles.indicator} />
						<View style={styles.content}>
							<Text style={styles.title}>{t('common.selectAuthor')}</Text>
							{AUDIO_SPEEDS.map(item => (
								<Checkbox
									key={item.id}
									text={item.label}
									onPress={handleChange(item)}
									isChecked={
										selected ? selected.id === item.id : item.value === speed
									}
								/>
							))}

							<Button
								label={t('common.select')}
								onPress={handleSelect}
								style={styles.button}
							/>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</View>
		</TouchableWithoutFeedback>
	)
}

AudioSpeedModal.displayName = 'AudioSpeedModal'
export default AudioSpeedModal
