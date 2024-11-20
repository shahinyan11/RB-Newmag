import React, { FC } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { deg } from 'react-native-linear-gradient-degree'

import ScreenWrapper from '@/components/ScreenWrapper'
import Text from '@/components/Text'
import Colors from '@/theme/colors'
import styles from './styles'
import Header from '@/components/Header'
import { TouchableOpacity, View } from 'react-native'
import { useTranslation } from 'react-i18next'

const BecomePremiumScreen: FC = () => {
	const { t } = useTranslation()
	
	return (
		<ScreenWrapper
			HeaderComponent={<Header title={t('common.goToPremium')} />}
			contentContainerStyle={styles.container}
		>
			<LinearGradient style={styles.topContainer} colors={Colors.gradientGold} {...deg(92)}>
				<Text style={styles.tt_u} color="white" size="S22" weight="600">
					{t('common.premiumMember')}
				</Text>
				<Text color="white" size="S16" weight="600">
					5500 AMD / MO
				</Text>
			</LinearGradient>
			<View style={styles.textContainer}>
				<Text size="S22">Ինչո՞ւ ենք այն օգտագործում</Text>
				<Text>
					Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ տեքստի
					ձևավորման վրա: Lorem Ipsum օգտագործելը բացատրվում է նրանով, որ այն բաշխում է
					բառերը քիչ թե շատ իրականի նման, ի տարբերություն «Բովանդակություն,
					բովանդակություն» սովորական կրկննության, ինչը ընթերցողի համար հասկանալի է: Շատ
					համակարգչային տպագրական ծրագրեր և ինտերնետային էջերի խմբագրիչներ այն օգտագործում
					են որպես իրենց ստանդարտ տեքստային մոդել, և հետևապես, ինտերնետում Lorem Ipsum-ի
					որոնման արդյունքում կարելի է հայտնաբերել էջեր, որոնք դեռ նոր են կերտվում:
					Ժամանակի ընթացքում ձևավորվել են Lorem Ipsum-ի տարբեր վերսիաներ` երբեմն ներառելով
					պատահական տեքստեր, երբեմն էլ հատուկ իմաստ (հումոր և նմանատիպ բովանդակություն):
				</Text>
			</View>
			<View style={styles.bottomContainer}>
				<LinearGradient style={styles.br_6} colors={Colors.gradientGold} {...deg(92)}>
					<TouchableOpacity style={styles.gradientButton}>
						<Text style={styles.tt_u} color="white" size="S22" weight="600">
							{t('common.becomePremiumUser')}
						</Text>
					</TouchableOpacity>
				</LinearGradient>
			</View>
		</ScreenWrapper>
	)
}

BecomePremiumScreen.displayName = 'BecomePremiumScreen'
export default BecomePremiumScreen
