import React, { FC, useCallback, useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import Colors from '@/theme/colors'
import type { TAudiobook } from '@/types'
import Header from '@/components/Header'
import EmptyAudiobooks from '@/components/emptyViews/EmptyAudiobooks'
import AudioBookCard from '@/components/cards/AudioBookCard'
import ScreenWrapper from '@/components/ScreenWrapper'
import AudioPlayer from '@/components/AudioPlayer'
import Button from '@/components/Button'
import { useDispatch, useSelector } from '@/store/hooks'
import { getUserAudiobooksReq } from '@/store/audiobooks/operations'
import { selectUserAudiobooks } from '@/store/audiobooks/selectors'
import styles from './styles'
import TrackPlayer from 'react-native-track-player'
import { API_URL } from '@/constants/CONST'
import { selectAuthToken } from '@/store/auth/selectors'
import getAuthorName from '@/utils/getAuthorName'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import SCREENS from '@/navigation/SCREENS'
import { NavigationProp } from '@/navigation/types'

const UserAudiobooksScreen: FC = () => {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const navigation = useNavigation<NavigationProp>()
	const token = useSelector(selectAuthToken)
	const audiobooks = useSelector(selectUserAudiobooks)
	const [playedAudiobook, setPlayedAudiobook] = useState<TAudiobook | undefined>()

	useEffect(() => {
		dispatch(getUserAudiobooksReq())
	}, [])

	const handleCardPress = useCallback(
		(item: TAudiobook) => () => {
			TrackPlayer.load({
				id: item.book_id,
				url: `${API_URL}/audioBooks/${item.book_id}/url/${token}`,
				title: item.book_name,
				artist: item.author_name,
				artwork: item.image,
			}).then(() => {
				TrackPlayer.play()
				setPlayedAudiobook(item)
			})
		},
		[],
	)

	const renderBookItem = useCallback(
		({ item }: { item: TAudiobook }) => (
			<AudioBookCard
				data={item}
				onPress={handleCardPress(item)}
				priceStyle={{ color: Colors.red500 }}
				hidePrice
			/>
		),
		[],
	)

	return (
		<View style={styles.fl_1}>
			<ScreenWrapper
				HeaderComponent={<Header title={t('common.audioBooks')} />}
				contentContainerStyle={styles.container}
			>
				<FlatList
					data={audiobooks}
					renderItem={renderBookItem}
					contentContainerStyle={styles.listContainer}
					ListFooterComponentStyle={!!audiobooks?.length && styles.mt_a}
					ListFooterComponent={
						<Button
							type="outline"
							label={t('button.shopAudiobooks')}
							onPress={() => navigation.navigate(SCREENS.AUDIOBOOKS)}
						/>
					}
					ListEmptyComponent={EmptyAudiobooks}
				/>
			</ScreenWrapper>
			{!!playedAudiobook && (
				<AudioPlayer
					isSmallByDefault
					onClose={() => setPlayedAudiobook(undefined)}
					trackInfo={{
						title: playedAudiobook.book_name,
						image: playedAudiobook.image,
						author: getAuthorName(playedAudiobook),
					}}
				/>
			)}
		</View>
	)
}

UserAudiobooksScreen.displayName = 'UserAudiobooks'
export default UserAudiobooksScreen
