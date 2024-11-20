import React, { useCallback, useEffect } from 'react'
import { FlatList, Image, ScrollView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Colors from '@/theme/colors'
import { NavigationProp } from '@/navigation/types'
import type { TBook, TChannel, valueof } from '@/types'
import keyExtractor from '@/utils/keyExtractor'
import { getRecommendedChannelsReq, getRecommendedEpisodesReq } from '@/store/channels/operations'
import { selectRecommendedChannels, selectRecommendedEpisodes } from '@/store/channels/selectors'
import { getBestAudiobooksReq } from '@/store/audiobooks/operations'
import { selectBestAudiobooks } from '@/store/audiobooks/selectors'
import { getTrendingBooksReq } from '@/store/books/operations'
import { selectTrendingBooks } from '@/store/books/selectors'
import { getLatestNewsReq } from '@/store/news/operations'
import { selectLatestNews } from '@/store/news/selectors'
import { useDispatch, useSelector } from '@/store/hooks'
import ChannelCardMini from '@/components/cards/ChannelCardMini'
import AudioBookCard from '@/components/cards/AudioBookCard'
import PodcastCard from '@/components/cards/PodcastCard'
import ScreenWrapper from '@/components/ScreenWrapper'
import BookCard from '@/components/cards/BookCard'
import NewsCard from '@/components/cards/NewsCard'
import Button from '@/components/Button'
import Text from '@/components/Text'
import Icon from '@/components/Icon'
import styles from './styles'
import SCREENS from '@/navigation/SCREENS'
import { getDeliveryAddressesReq, getLanguageReq, getUserInfoReq } from '@/store/user/operations'
import { getCartReq } from '@/store/shopping/operations'
import { getBannersReq, getPaymentMethodsReq } from '@/store/app/operations'
import { selectBanner } from '@/store/app/selectors'
import { useTranslation } from 'react-i18next'
import { getNotificationsReq } from '@/store/notifications/operations'

function HomeScreen() {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const navigation = useNavigation<NavigationProp>()
	const latestNews = useSelector(selectLatestNews)
	const banner = useSelector(selectBanner)
	const trendingBooks = useSelector(selectTrendingBooks)
	const bestAudiobooks = useSelector(selectBestAudiobooks)
	const recommendedChannels = useSelector(selectRecommendedChannels)
	const recommendedEpisodes = useSelector(selectRecommendedEpisodes)

	useEffect(() => {
		// Linking.canOpenURL(
		// 	'idramapp://payment?receiverName=Shahe&receiverId=123456789&title=title&amount=1500&tip=15',
		// ).then(res => {
		// 	if(){
		// 		Linking.openURL()
		// 	}
		// })

		dispatch(getCartReq())
		dispatch(getNotificationsReq())
		dispatch(getBannersReq())
		dispatch(getUserInfoReq())
		dispatch(getTrendingBooksReq())
		dispatch(getLatestNewsReq())
		dispatch(getBestAudiobooksReq())
		dispatch(getRecommendedChannelsReq())
		dispatch(getRecommendedEpisodesReq())
		dispatch(getDeliveryAddressesReq())
		dispatch(getLanguageReq())
		dispatch(getPaymentMethodsReq())
	}, [])

	const renderBookItem = useCallback(({ item }: { item: TBook }) => <BookCard data={item} />, [])

	const navigateTo = useCallback(
		(screen: valueof<typeof SCREENS>) => () => {
			// @ts-ignore
			navigation.navigate(screen)
		},
		[navigation],
	)

	const renderChannelItem = useCallback(
		({ item }: { item: TChannel }) => <ChannelCardMini {...item} />,
		[],
	)

	return (
		<ScreenWrapper>
			<ScrollView style={styles.fl_1} contentContainerStyle={styles.container}>
				{banner?.image && (
					<Image style={styles.promotionImage} source={{ uri: banner?.image }} />
				)}

				{/* Stories */}
				{/*<View style={styles.section}>*/}
				{/*	<View style={styles.sectionHeader}>*/}
				{/*		<Text style={styles.sectionName}>{t('common.stories')}</Text>*/}
				{/*	</View>*/}
				{/*	<Stories />*/}
				{/*</View>*/}

				{/* Trending Books */}
				<View style={styles.section}>
					<View style={styles.sectionHeader}>
						<Icon name="flame" />
						<Text style={styles.sectionName}>{t('common.trendingBooks')}</Text>
					</View>
					<FlatList
						horizontal
						keyExtractor={keyExtractor}
						data={trendingBooks}
						renderItem={renderBookItem}
						contentContainerStyle={styles.flatListContentContainer}
						showsHorizontalScrollIndicator={false}
					/>
				</View>
				<Button
					type="outline"
					label={t('common.allBooks')}
					addBefore={() => <Icon name="book" size={20} disabled />}
					labelStyle={styles.buttonLabel}
					onPress={navigateTo(SCREENS.BOOKS)}
				/>

				{/* Best Audiobooks */}
				<View style={styles.section}>
					<View style={styles.sectionHeader}>
						<Icon name="music" color={Colors.red500} />
						<Text style={styles.sectionName}>{t('common.bestAudioBooks')}</Text>
					</View>
					{bestAudiobooks.map(item => (
						<AudioBookCard key={item.book_id} data={item} />
					))}
				</View>
				<Button
					type="outline"
					label={t('common.allAudioBooks')}
					addBefore={() => (
						<Icon name="headphone" color={Colors.black} size={20} disabled />
					)}
					labelStyle={styles.buttonLabel}
					onPress={navigateTo(SCREENS.AUDIOBOOKS)}
				/>

				{/* Last News */}
				<View style={styles.section}>
					<View style={styles.sectionHeader}>
						<Icon name="list" color={Colors.red500} />
						<Text style={styles.sectionName}>{t('common.lastNews')}</Text>
					</View>
					{latestNews.map(item => (
						<NewsCard key={item.id} data={item} />
					))}
				</View>
				<Button
					type="outline"
					label={t('common.allNews')}
					addBefore={() => <Icon name="list" size={20} disabled />}
					labelStyle={styles.buttonLabel}
					onPress={navigateTo(SCREENS.NEWS)}
				/>

				{/* Podcast */}
				<View style={styles.section}>
					<View style={styles.sectionHeader}>
						<Icon name="podcast" color={Colors.red500} />
						<Text style={styles.sectionName}>{t('common.podcast')}</Text>
					</View>
					<Text style={styles.textSecondary}>{t('common.recommendedChannels')}:</Text>
					<FlatList
						horizontal
						keyExtractor={keyExtractor}
						data={recommendedChannels}
						renderItem={renderChannelItem}
						contentContainerStyle={styles.flatListContentContainer}
						showsHorizontalScrollIndicator={false}
					/>
					<Text style={styles.textSecondary}>{t('common.recommendedPodcasts')}:</Text>
					<View style={{ gap: 10 }}>
						{recommendedEpisodes.map(item => (
							<PodcastCard data={item} key={item.id} />
						))}
					</View>
					<Button
						type="outline"
						label={t('common.allPodcasts')}
						addBefore={() => <Icon name="podcast" size={20} disabled />}
						labelStyle={styles.buttonLabel}
						onPress={navigateTo(SCREENS.PODCAST)}
					/>
				</View>
			</ScrollView>
		</ScreenWrapper>
	)
}

HomeScreen.displayName = 'HomeScreen'
export default HomeScreen
