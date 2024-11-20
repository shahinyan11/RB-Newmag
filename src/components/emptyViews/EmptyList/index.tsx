import { Image, Text, View } from 'react-native'

import image from '@/assets/images/filter-not-found.png'
import Button from '@/components/Button'
import styles from './styles'
import { useTranslation } from 'react-i18next'

function EmptyList() {
	const { t } = useTranslation()
	
	return (
		<View style={styles.container}>
			<Image source={image} />
			<Text style={styles.text}>{t('messages.didNotFind')}</Text>
			<Button
				type="outline"
				label={t('common.showAll')}
				labelStyle={styles.buttonLabel}
				onPress={() => {}}
			/>
		</View>
	)
}

EmptyList.displayName = 'EmptyList'
export default EmptyList
