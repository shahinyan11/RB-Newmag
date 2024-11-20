import { Image, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import image from '@/assets/images/emptyCart.png'
import styles from './styles'
import Text from '@/components/Text'
import Button from '@/components/Button'
import { useCallback } from 'react'
import SCREENS from '@/navigation/SCREENS'
import { NavigationProp } from '@/navigation/types'
import { useTranslation } from 'react-i18next'

function EmptyCart() {
	const { t } = useTranslation()
	const navigation = useNavigation<NavigationProp>()

	const handlePress = useCallback(() => {
		navigation.navigate(SCREENS.HOME)
	}, [navigation])

	return (
		<View style={styles.container}>
			<Image source={image} style={styles.image} />
			<Text size="S17" style={styles.text}>
				{t('messages.yourCartIsEmpty')}
			</Text>
			<Button label={t('button.shopNow')} type="outline" onPress={handlePress} />
		</View>
	)
}

EmptyCart.displayName = 'EmptyCart'
export default EmptyCart
