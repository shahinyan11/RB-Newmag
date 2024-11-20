import { Image, View } from 'react-native'
import image from '@/assets/images/emptyOrsers.png'
import Button from '@/components/Button'
import styles from './styles'
import Text from '@/components/Text'
import { useTranslation } from 'react-i18next'

function EmptyOrders() {
	const { t } = useTranslation()

	return (
		<View style={styles.container}>
			<Image source={image} style={styles.image} />
			<Text size="S17" style={styles.text}>
				{t('messages.youHaveNoOrdersYet')}
			</Text>
			<Button
				type="outline"
				label={t('common.shopBooks')}
				labelStyle={styles.buttonLabel}
				onPress={() => {}}
			/>
			<Button
				type="none"
				label={t('button.shopAudiobooks')}
				labelStyle={styles.buttonLabel}
				onPress={() => {}}
			/>
		</View>
	)
}

EmptyOrders.displayName = 'EmptyOrders'
export default EmptyOrders
