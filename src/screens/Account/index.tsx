import React, { FC, useCallback } from 'react'
import { Linking, SectionList, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import { selectLanguage, selectUser } from '@/store/user/selectors'
import { useDispatch, useSelector } from '@/store/hooks'
import { NavigationProp } from '@/navigation/types'
import navMenu, { TNavItem, TNavMenu } from '@/screens/Account/navMenu'
import LocalHeader from '@/screens/Account/LocalHeader'
import ScreenWrapper from '@/components/ScreenWrapper'
import Pressable from '@/components/Pressable'
import NavItem from '@/components/NavItem'
import Icon from '@/components/Icon'
import Text from '@/components/Text'
import styles from './styles'
import { APP_LANGUAGES, SOCIAL_LINKS } from '@/constants/CONST'
import { setLanguageReq } from '@/store/user/operations'
import { Section } from '@/types'

const AccountScreen: FC = () => {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const navigation = useNavigation<NavigationProp>()
	const language = useSelector(selectLanguage)
	const user = useSelector(selectUser)
	const renderItem = useCallback(
		({ item }: { item: TNavItem }) => <NavItem containerStyle={styles.ph_10} data={item} />,
		[],
	)

	const renderSectionHeader = useCallback(
		({ section }: Section<TNavMenu>) => (
			<Text style={styles.sectionTitle} weight="600" size="S12" color="gray800">
				{t(section.title)}
			</Text>
		),
		[],
	)

	const changeLanguage = useCallback(
		(lang: string) => () => {
			dispatch(setLanguageReq(lang))
		},
		[],
	)

	return (
		<ScreenWrapper HeaderComponent={<LocalHeader />}>
			<SectionList
				sections={navMenu}
				renderItem={renderItem}
				renderSectionHeader={renderSectionHeader}
				ItemSeparatorComponent={() => <View style={[styles.line_h, styles.mh_10]} />}
				showsVerticalScrollIndicator={false}
				ListFooterComponentStyle={styles.bottomContainer}
				ListHeaderComponent={
					<View style={styles.topContainer}>
						<View style={styles.avatarBox}>
							<Text color="white" size="S20" weight="600" style={styles.tt_u}>
								{user.name?.[0]}
								{user.last_name?.[0]}
							</Text>
						</View>

						<Text style={[styles.mb_6, styles.tt_c]} size="S22" weight="600">
							{user.name} {user.last_name}
						</Text>
						{/*<Text style={[styles.mb_14, styles.tt_u]} size="S14" weight="600">*/}
						{/*	{t('common.freeMember')}*/}
						{/*</Text>*/}
						{/*<Text size="S14" weight="300" color="gray700">*/}
						{/*	Active for 17 more days*/}
						{/*</Text>*/}
						{/*<LinearGradient*/}
						{/*	style={styles.br_4}*/}
						{/*	colors={Colors.gradientGold}*/}
						{/*	{...deg(92)}*/}
						{/*>*/}
						{/*	<TouchableOpacity*/}
						{/*		style={styles.gradientButton}*/}
						{/*		onPress={() => navigation.navigate(SCREENS.BECOME_PREMIUM)}*/}
						{/*	>*/}
						{/*		<Text color="white" size="S12" weight="600">*/}
						{/*			Go to premium*/}
						{/*		</Text>*/}
						{/*	</TouchableOpacity>*/}
						{/*</LinearGradient>*/}
					</View>
				}
				ListFooterComponent={
					<View>
						<Text style={[styles.pb_18, styles.pt_30]}>{t('common.socialMedia')}</Text>
						<View style={[styles.row, styles.jc_sb, styles.gap_20]}>
							<Pressable
								style={styles.whiteBox}
								onPress={() => Linking.openURL(SOCIAL_LINKS.FACEBOOK)}
							>
								<Icon name="fb" disabled />
								<Text>facebook</Text>
							</Pressable>
							<Pressable
								style={styles.whiteBox}
								onPress={() => Linking.openURL(SOCIAL_LINKS.INSTAGRAM)}
							>
								<Icon name="insta" disabled />
								<Text>Instagram</Text>
							</Pressable>
							<Pressable
								style={styles.whiteBox}
								onPress={() => Linking.openURL(SOCIAL_LINKS.TWITTER)}
							>
								<Icon name="twitter" disabled />
								<Text>twitter</Text>
							</Pressable>
						</View>
						<Text style={[styles.pb_18, styles.pt_30]}>{t('common.socialMedia')}</Text>
						<View style={[styles.row, styles.gap_20]}>
							<Pressable
								onPress={changeLanguage(APP_LANGUAGES.AM)}
								style={[
									styles.whiteBox,
									language === APP_LANGUAGES.AM && styles.whiteBoxSelected,
								]}
							>
								<Icon name="flag-arm" disabled />
								<Text>հայերեն</Text>
							</Pressable>
							<Pressable
								onPress={changeLanguage(APP_LANGUAGES.EN)}
								style={[
									styles.whiteBox,
									language === APP_LANGUAGES.EN && styles.whiteBoxSelected,
								]}
							>
								<Icon name="flag-uk" disabled />
								<Text>English</Text>
							</Pressable>
						</View>
						<Text style={[styles.mv_30, styles.ta_c]} weight="300" size="S14">
							Newmag © 2011-2021 All rights reserved
						</Text>
					</View>
				}
			/>
		</ScreenWrapper>
	)
}

AccountScreen.displayName = 'AccountScreen'
export default AccountScreen
