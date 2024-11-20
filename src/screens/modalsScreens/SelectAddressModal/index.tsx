import React, { FC, useCallback, useMemo, useState } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import styles from './styles'
import Button from '@/components/Button'
import Checkbox from '@/components/Checkbox'
import { goBack } from '@/navigation'
import { useDispatch } from '@/store/hooks'
import { updateAudioPlayer } from '@/store/audioPlayer'
import { selectSpeed } from '@/store/audioPlayer/selectors'
import { TBasicOption } from '@/types'
import { AUDIO_SPEEDS } from '@/constants/CONST'
import { useTranslation } from 'react-i18next'

const SelectAddressModal: FC = () => {
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
		dispatch(updateAudioPlayer({ speed: selected?.value }))
		navigation.goBack()
	}, [selected])

	const defaultSelected = useMemo(() => speed, [speed])

	return (
		<TouchableWithoutFeedback onPress={() => goBack()}>
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={undefined}>
					<View>
						<View style={styles.indicator} />
						<View style={styles.content}>
							<Text style={styles.title}>{t('modal.selectYorAddress')}</Text>
							{AUDIO_SPEEDS.map(item => (
								<Checkbox
									key={item.id}
									text={item.label}
									onPress={handleChange(item)}
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

SelectAddressModal.displayName = 'SelectAddressModal'
export default SelectAddressModal
