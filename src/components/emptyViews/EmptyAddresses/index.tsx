import { Image, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useCallback } from 'react'
import { NavigationProp } from '@/navigation/types'
import SCREENS from '@/navigation/SCREENS'
import image from '@/assets/images/emptyAddresses.png'
import Button from '@/components/Button'
import Text from '@/components/Text'
import styles from './styles'
import { useTranslation } from 'react-i18next'

function EmptyAddresses() {
	const { t } = useTranslation()
	const navigation = useNavigation<NavigationProp>()

	const handlePress = useCallback(() => {
		navigation.navigate(SCREENS.ADD_DELIVERY_ADDRESSES)
	}, [navigation])

	return (
		<View style={styles.container}>
			<Image source={image} style={styles.image} />
			<Text size="S17" style={styles.text}>
				{t('messages.youHaveNoDeliveryAddresses')}
			</Text>
			<Button type="outline" label={t('common.addDeliveryAddress')} onPress={handlePress} />
		</View>
	)
}

EmptyAddresses.displayName = 'EmptyAddresses'
export default EmptyAddresses
