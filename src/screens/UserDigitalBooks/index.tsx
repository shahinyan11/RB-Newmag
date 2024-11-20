import React, { FC, useCallback, useEffect } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Header from '@/components/Header'
import styles from './styles'
import { FlatList } from 'react-native'
import type { TBook } from '@/types'
import BookCard from '@/components/cards/BookCard'
import EmptyDigitalBooks from '@/components/emptyViews/EmptyDigitalBooks'
import { useDispatch, useSelector } from '@/store/hooks'
import { getUserDigitalBooksReq } from '@/store/books/operations'
import { selectUserDigitalBooks } from '@/store/books/selectors'
import SCREENS from '@/navigation/SCREENS'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from '@/navigation/types'
import { useTranslation } from 'react-i18next'

const UserDigitalBooksScreen: FC = () => {
	const { t } = useTranslation()
	const navigation = useNavigation<NavigationProp>()
	const dispatch = useDispatch()
	const books = useSelector(selectUserDigitalBooks)

	useEffect(() => {
		dispatch(getUserDigitalBooksReq())
	}, [])

	const handleCardPress = useCallback(
		(item: TBook) => () => {
			navigation.navigate(SCREENS.DIGITAL_BOOK, {
				title: item.book_name,
				bookId: item?.book_id,
			})
		},
		[],
	)

	const renderBookItem = useCallback(
		({ item }: { item: TBook }) => (
			<BookCard
				containerStyle={styles.cardContainer}
				data={item}
				onPress={handleCardPress(item)}
				hidePrice
			/>
		),
		[],
	)

	return (
		<ScreenWrapper
			HeaderComponent={<Header title={t('common.digitalBooks')} />}
			contentContainerStyle={styles.container}
		>
			<FlatList
				data={books}
				numColumns={2}
				renderItem={renderBookItem}
				contentContainerStyle={styles.listContainer}
				columnWrapperStyle={styles.jc_sb}
				ListFooterComponentStyle={!!books.length && styles.mt_a}
				ListEmptyComponent={EmptyDigitalBooks}
			/>
		</ScreenWrapper>
	)
}

UserDigitalBooksScreen.displayName = 'UserDigitalBooksScreen'
export default UserDigitalBooksScreen
