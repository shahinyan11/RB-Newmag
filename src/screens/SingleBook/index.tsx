import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { ActivityIndicator, FlatList, Image, ScrollView, View } from 'react-native'
import { useSelector } from 'react-redux'
import { StackScreenProps } from '@react-navigation/stack'
import { SCREEN_WIDTH } from '@gorhom/bottom-sheet'
import RenderHtml from 'react-native-render-html'
import { PrivateScreensParamList } from '@/navigation/types'
import { selectCurrentBook, selectSimilarBooks } from '@/store/books/selectors'
import getSimilarBooksReq from '@/store/books/operations/getSimilarBooksReq'
import { booksEndpoint } from '@/store/books/endpoints'
import { getBookById } from '@/store/books/operations'
import { selectLoaders } from '@/store/app/selectors'
import { useDispatch } from '@/store/hooks'
import YoutubeVideoPlayer from '@/components/YoutubeVideoPlayer'
import ScreenWrapper from '@/components/ScreenWrapper'
import BookCard from '@/components/cards/BookCard'
import Button from '@/components/Button'
import Text from '@/components/Text'
import styles from './styles'
import { BOOK_TYPES } from '@/constants/CONST'
import { addToCartReq } from '@/store/shopping/operations'
import { valueof } from '@/types'
import { addToCartEndpoint } from '@/store/shopping/endpoints'
import Icon from '@/components/Icon'
import { SIZES } from '@/constants/SIZES'
import Colors from '@/theme/colors'
import getAuthorName from '@/utils/getAuthorName'
import { useTranslation } from 'react-i18next'

function SingleBook({ route }: StackScreenProps<PrivateScreensParamList, 'singleBook'>) {
	const { t } = useTranslation()
	const bookId = route.params.bookId
	const dispatch = useDispatch()
	const book = useSelector(selectCurrentBook)
	const similarBooks = useSelector(selectSimilarBooks)
	const loaders = useSelector(selectLoaders)
	const isLoading = loaders[booksEndpoint.endpoint]
	const isPendingBuyAction = loaders[addToCartEndpoint.endpoint]
	const [bookType, setBookType] = useState<valueof<typeof BOOK_TYPES>>(BOOK_TYPES.BOOK)
	const [quantity, setQuantity] = useState<number>(1)

	useEffect(() => {
		dispatch(getBookById(bookId))
		dispatch(getSimilarBooksReq({ bookId }))
	}, [])

	const loadMore = useCallback(() => {
		dispatch(getSimilarBooksReq({ bookId, loadMore: true }))
	}, [])

	const buy = useCallback(() => {
		dispatch(addToCartReq({ id: bookId, type: bookType, quantity }))
	}, [quantity, bookType])

	const handleChangeQuantity = useCallback(
		(action: 'plus' | 'minus') => () => {
			setQuantity(prev => (action === 'plus' ? prev + 1 : prev - 1))
		},
		[],
	)

	const handleChangeBookType = useCallback(
		(type: string) => () => {
			if (type === BOOK_TYPES.DIGITAL_BOOK) {
				setQuantity(1)
			}

			setBookType(type)
		},
		[bookType],
	)

	const canIncreaseCount = useMemo(() => {
		return bookType !== BOOK_TYPES.DIGITAL_BOOK && quantity < Number(book?.in_stock)
	}, [bookType, book])

	return (
		<ScreenWrapper>
			<ScrollView
				style={styles.fl_1}
				contentContainerStyle={styles.container}
				onMomentumScrollEnd={loadMore}
			>
				<View style={styles.topContainer}>
					<Image style={styles.image} source={{ uri: book?.image }} />
				</View>
				<View style={styles.whiteContainer}>
					<View style={styles.section}>
						<Text style={styles.mb_16} color="red500" size="S22">
							{bookType === BOOK_TYPES.DIGITAL_BOOK
								? book?.digital_price
								: book?.price}{' '}
							֏
						</Text>
						<Text style={styles.mb_14} size="S22">
							{book?.book_name}
						</Text>
						<Text style={styles.mb_20} weight="300" color="gray800">
							{getAuthorName(book)}
						</Text>
						<View style={[styles.row, styles.gap_10]}>
							<Button
								type={bookType === BOOK_TYPES.BOOK ? 'default' : 'outline'}
								style={styles.fl_1}
								label={t('common.printedBook')}
								onPress={handleChangeBookType(BOOK_TYPES.BOOK)}
							/>
							{book?.has_digital_version && (
								<Button
									type={
										bookType === BOOK_TYPES.DIGITAL_BOOK ? 'default' : 'outline'
									}
									style={styles.fl_1}
									label={t('common.digitalBook')}
									onPress={handleChangeBookType(BOOK_TYPES.DIGITAL_BOOK)}
								/>
							)}
						</View>
					</View>
					<View style={styles.section}>
						<Text style={styles.mb_16} size="S22" color="gray800">
							{t('common.description')}
						</Text>
						<RenderHtml
							contentWidth={SCREEN_WIDTH}
							source={{ html: book?.book_info ?? '' }}
						/>
					</View>
					<View style={styles.section}>
						<Text style={styles.mb_20} size="S22" color="gray800">
							{t('common.additionalInfo')}
						</Text>
						<View style={styles.infoBox}>
							<Text size="S14">Օրիգինալ անունը:</Text>
							<Text size="S16" weight="300">
								{book?.book_name}
							</Text>
						</View>
						<View style={[styles.infoBox, styles.bgWhite]}>
							<Text size="S14">Կատեգորիան:</Text>
							<Text size="S16" weight="300">
								{book?.categories?.join(', ')}
							</Text>
						</View>
						<View style={styles.infoBox}>
							<Text size="S14">ISBN:</Text>
							<Text size="S16" weight="300">
								{book?.isbn}
							</Text>
						</View>
						<View style={[styles.infoBox, styles.bgWhite]}>
							<Text size="S14">Հրատարակության տարին:</Text>
							<Text size="S16" weight="300">
								{book?.print}
							</Text>
						</View>
						<View style={styles.infoBox}>
							<Text size="S14">Էջերի քանակը:</Text>
							<Text size="S16" weight="300">
								{book?.pages}
							</Text>
						</View>

						<View style={[styles.infoBox, styles.bgWhite]}>
							<Text size="S14">Չափսը:</Text>
							<Text size="S16" weight="300">
								{book?.size}
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
								source={{ uri: book?.authors[0].image }}
							/>
							<Text style={styles.mb_20} size="S18">
								{book?.authors[0].name}
							</Text>
							<Text style={styles.mb_14} size="S14" weight="300">
								{book?.authors[0].info}
							</Text>
						</View>
					</View>
					<View style={styles.section}>
						<Text style={styles.mb_20} size="S22" color="gray800">
							{t('common.bookTrailer')}
						</Text>
						<YoutubeVideoPlayer url={book?.trailer ?? ''} />
					</View>
					<View>
						<Text style={styles.mb_20} size="S22" color="gray800">
							{t('common.seeAlso')}
						</Text>
						<View style={styles.booksContainer}>
							<FlatList
								data={similarBooks}
								scrollEnabled={false}
								numColumns={2}
								columnWrapperStyle={styles.jc_sb}
								contentContainerStyle={styles.gap_25}
								renderItem={({ item }) => (
									<BookCard containerStyle={styles.bookCard} data={item} />
								)}
							/>
						</View>
					</View>
					{isLoading ? <ActivityIndicator size="large" style={styles.mt_20} /> : null}
				</View>
			</ScrollView>
			<View style={[styles.ph_10, styles.pv_14, styles.row, styles.gap_10]}>
				<View style={styles.countControl}>
					<Icon
						name="chevron-up"
						size={SIZES.S20}
						color={canIncreaseCount ? Colors.black : Colors.gray600}
						onPress={handleChangeQuantity('plus')}
						disabled={!canIncreaseCount}
					/>
					<Text weight="700">{quantity}</Text>
					<Icon
						name="chevron-down"
						size={SIZES.S20}
						disabled={quantity <= 1}
						color={quantity === 1 ? Colors.gray600 : Colors.black}
						onPress={handleChangeQuantity('minus')}
					/>
				</View>
				<Button
					type="danger"
					label={Number(book?.in_stock) ? t('button.buy') : t('common.outOffStock')}
					loading={isPendingBuyAction}
					disabled={isPendingBuyAction || !Number(book?.in_stock)}
					onPress={buy}
					style={styles.fl_1}
				/>
			</View>
		</ScreenWrapper>
	)
}

SingleBook.displayName = 'SingleBook'
export default SingleBook
