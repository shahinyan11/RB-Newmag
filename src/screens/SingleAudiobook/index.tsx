import React, { FC, useCallback, useEffect, useState } from 'react'
import { FlatList, Image, ScrollView, StyleSheet, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import RenderHtml from 'react-native-render-html'
import { SCREEN_WIDTH } from '@gorhom/bottom-sheet'
import keyExtractor from '@/utils/keyExtractor'
import { PrivateScreensParamList } from '@/navigation/types'
import { selectCurrentAudiobook, selectSimilarAudiobooks } from '@/store/audiobooks/selectors'
import { getAudiobookById, getSimilarAudiobooksReq } from '@/store/audiobooks/operations'
import { useDispatch, useSelector } from '@/store/hooks'
import YoutubeVideoPlayer from '@/components/YoutubeVideoPlayer'
import AudioBookCard from '@/components/cards/AudioBookCard'
import ScreenWrapper from '@/components/ScreenWrapper'
import AudioPlayer from '@/components/AudioPlayer'
import Icon from '@/components/Icon'
import Text from '@/components/Text'
import AudioPlayerFooter from './AudioPlayerFooter'
import styles from './styles'
import TrackPlayer from 'react-native-track-player'
import getAuthorName from '@/utils/getAuthorName'
import { addToCartReq } from '@/store/shopping/operations'
import { BOOK_TYPES } from '@/constants/CONST'
import { useTranslation } from 'react-i18next'
import Button from '@/components/Button'
import Colors from '@/theme/colors'
import { RW } from '@/theme'

const SingleAudiobook: FC<StackScreenProps<PrivateScreensParamList, 'singleAudiobook'>> = ({
	route,
}) => {
	const { t } = useTranslation()
	const bookId = route.params.bookId
	const dispatch = useDispatch()
	const [isPlayerOpen, setIsPlayerOpen] = useState(false)
	const audiobook = useSelector(selectCurrentAudiobook)
	const similarAudiobooks = useSelector(selectSimilarAudiobooks)

	useEffect(() => {
		dispatch(getAudiobookById(bookId))
		dispatch(getSimilarAudiobooksReq({ audiobookId: bookId }))

		// const track = {
		// 	url: audiobook?.audio_demo ?? '',
		// 	title: audiobook?.book_name,
		// 	artist: audiobook?.author_name,
		// 	artwork: audiobook?.image,
		// }
		// TrackPlayer.add([track])
	}, [])

	const handlePlayDemo = useCallback(() => {
		if (!audiobook) return

		TrackPlayer.load({
			id: audiobook.book_id,
			url: audiobook.audio_demo,
			title: audiobook.book_name,
			artist: audiobook.author_name,
			artwork: audiobook.image,
		}).then(() => {
			TrackPlayer.play()
			setIsPlayerOpen(true)
		})
	}, [audiobook])

	const loadMore = useCallback(() => {
		dispatch(getSimilarAudiobooksReq({ audiobookId: bookId, loadMore: true }))
	}, [])

	const buy = useCallback(() => {
		dispatch(addToCartReq({ id: bookId, type: BOOK_TYPES.AUDIOBOOK }))
	}, [bookId])

	return (
		<View style={styles.fl_1}>
			<ScreenWrapper>
				<ScrollView
					style={styles.fl_1}
					contentContainerStyle={styles.container}
					onMomentumScrollEnd={loadMore}
				>
					<View style={styles.topContainer}>
						<Image
							style={[styles.image, StyleSheet.absoluteFill]}
							source={{ uri: audiobook?.image }}
						/>
					</View>
					<View style={styles.whiteContainer}>
						<View style={styles.section}>
							<Text style={styles.mb_10} color="red500" size="S22">
								{audiobook?.price} ֏
							</Text>
							<Text style={styles.mb_14} size="S22">
								{audiobook?.book_name}
							</Text>
							<Text style={styles.mb_16} weight="300" color="gray800">
								{audiobook?.author_name}
							</Text>
							<View style={[styles.row, styles.gap_6]}>
								<Text weight="300" color="gray800">
									Duration:
								</Text>
								<View style={styles.durationBox}>
									<Icon name="clock" />
									<Text weight="600" size="S14" color="white">
										{audiobook?.duration}
									</Text>
								</View>
							</View>
						</View>
						<View style={[styles.section, styles.pb_14]}>
							<Text style={styles.mb_16} size="S22" color="gray800">
								{t('common.description')}
							</Text>
							<RenderHtml
								contentWidth={SCREEN_WIDTH}
								source={{ html: audiobook?.book_info ?? '' }}
							/>
						</View>
						<View style={styles.section}>
							<Text style={styles.mb_20} size="S22" color="gray800">
								{t('common.additionalInfo')}
							</Text>
							<View style={styles.infoBox}>
								<Text size="S14">Օրիգինալ անունը:</Text>
								<Text size="S16" weight="300">
									{audiobook?.book_name}
								</Text>
							</View>
							<View style={[styles.infoBox, styles.bgWhite]}>
								<Text size="S14">Կատեգորիան:</Text>
								<Text size="S16" weight="300">
									{audiobook?.categories?.join(', ')}
								</Text>
							</View>
							<View style={styles.infoBox}>
								<Text size="S14">Թարգմանիչ:</Text>
								<Text size="S16" weight="300">
									NewMag
								</Text>
							</View>
						</View>
						<View style={styles.section}>
							<Text style={styles.mb_20} size="S22" color="gray800">
								{t('common.author')}
							</Text>
							<View style={styles.authorBox}>
								<Image
									style={styles.authorImage}
									source={{ uri: audiobook?.authors[0].image }}
								/>
								<Text style={styles.mb_20} size="S18">
									{audiobook?.authors[0].name}
								</Text>
								<Text style={styles.mb_14} size="S14" weight="300">
									{audiobook?.authors[0].info}
								</Text>
							</View>
						</View>
						<View style={styles.section}>
							<Text style={styles.mb_20} size="S22" color="gray800">
								{t('common.bookTrailer')}
							</Text>
							<YoutubeVideoPlayer url={audiobook?.trailer ?? ''} />
						</View>
						<View style={styles.section}>
							<Text style={styles.mb_30} size="S22" color="gray800">
								{t('common.seeAlso')}
							</Text>
							<FlatList
								data={similarAudiobooks}
								keyExtractor={keyExtractor}
								scrollEnabled={false}
								contentContainerStyle={styles.gap_16}
								renderItem={({ item }) => <AudioBookCard data={item} />}
							/>
						</View>
					</View>
				</ScrollView>
				<View style={[styles.row, styles.gap_16, styles.ph_10, styles.pv_16]}>
					<Button
						style={styles.fl_1}
						label={t('button.playDemo')}
						onPress={handlePlayDemo}
						addBefore={() => <Icon name="play" color={Colors.white} size={RW(15)} />}
					/>
					<Button
						style={styles.fl_1}
						type="danger"
						label={t('button.buy')}
						onPress={buy}
					/>
				</View>
			</ScreenWrapper>

			{isPlayerOpen && (
				<AudioPlayer
					onClose={() => setIsPlayerOpen(false)}
					trackInfo={{
						title: audiobook?.book_name,
						image: audiobook?.image,
						author: getAuthorName(audiobook),
					}}
					footerComponent={props => (
						<AudioPlayerFooter {...props} price={audiobook?.price} onPress={buy} />
					)}
				/>
			)}
		</View>
	)
}

SingleAudiobook.displayName = 'SingleAudiobook'
export default SingleAudiobook
