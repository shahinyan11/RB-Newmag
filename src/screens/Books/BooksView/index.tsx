import React, { useCallback } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'
import { useDispatch, useSelector } from '@/store/hooks'
import BookCard from '@/components/cards/BookCard'
import EmptyList from '@/components/emptyViews/EmptyList'
import type { TBook } from '@/types'
import { selectAllBooksBooks } from '@/store/books/selectors'
import { selectLoaders } from '@/store/app/selectors'
import { booksEndpoint } from '@/store/books/endpoints'
import { getBooksReq } from '@/store/books/operations'
import Filters from '@/screens/Books/BooksView/Filters'
import styles from './styles'
import { RH } from '@/theme'

// type BooksViewProps = MaterialTopTabScreenProps<BooksTabParamList>
//
// function BooksView({ route }: BooksViewProps) {
// 	const isFree = route.name === SCREENS.BOOKS_FREE
// TODO - Replace the below line ( function BooksView() { )  with the commented code above to activate tabs
function BooksView() {
	const dispatch = useDispatch()
	const books = useSelector(selectAllBooksBooks)
	const loaders = useSelector(selectLoaders)
	const isLoading = loaders[booksEndpoint.endpoint]

	const renderBookItem = useCallback(
		({ item }: { item: TBook }) => <BookCard containerStyle={styles.bookCard} data={item} />,
		[],
	)

	const loadMore = useCallback(() => {
		dispatch(getBooksReq(true))
	}, [])

	return (
		<View style={styles.container}>
			<FlatList
				data={books}
				numColumns={2}
				renderItem={renderBookItem}
				columnWrapperStyle={styles.listColumnWrapper}
				contentContainerStyle={styles.listContainer}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={!isLoading ? EmptyList : null}
				ListHeaderComponent={Filters}
				onMomentumScrollEnd={loadMore}
				onEndReachedThreshold={0.1}
				ListFooterComponentStyle={{ height: RH(40) }}
				ListFooterComponent={
					<View>{isLoading ? <ActivityIndicator size={RH(30)} /> : null}</View>
				}
			/>
		</View>
	)
}

BooksView.displayName = 'BooksView'
export default BooksView
