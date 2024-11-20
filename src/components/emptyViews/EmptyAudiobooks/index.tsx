import { Image, View } from 'react-native'
import image from '@/assets/images/emptyAudiobooks.png'
import styles from './styles'
import Text from '@/components/Text'
import { useTranslation } from 'react-i18next'

function EmptyAudiobooks() {
	const { t } = useTranslation()

	return (
		<View style={styles.container}>
			<Image source={image} style={styles.image} />
			<Text size="S17" style={styles.text}>
				{t('messages.youHaveNoOrdersYet')}
			</Text>
		</View>
	)
}

EmptyAudiobooks.displayName = 'EmptyAudiobooks'
export default EmptyAudiobooks
