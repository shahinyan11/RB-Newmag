import React, { FC, useCallback, useEffect } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import styles from './styles'
import { ActivityIndicator, FlatList, View } from 'react-native'
import NewsCard from '@/components/cards/NewsCard'
import ListHeader from './ListHeader'
import { useDispatch } from '@/store/hooks'
import { useSelector } from 'react-redux'
import { selectNews } from '@/store/news/selectors'
import { getNewsReq } from '@/store/news/operations'
import { RH } from '@/theme'
import { selectIsLoading } from '@/store/app/selectors'
import { newsEndpoint } from '@/store/news/endpoints'
import keyExtractor from '@/utils/keyExtractor'

const News: FC = () => {
	const dispatch = useDispatch()
	const news = useSelector(selectNews)
	const isLoading = useSelector(selectIsLoading(newsEndpoint.endpoint))

	useEffect(() => {
		dispatch(getNewsReq())
	}, [])

	const renderItem = useCallback(
		({ item }: { item: any }) => (
			<NewsCard data={item} containerStyle={[styles.ph_10, styles.mb_10]} />
		),
		[],
	)

	const loadMore = useCallback(() => {
		dispatch(getNewsReq(true))
	}, [])

	return (
		<ScreenWrapper>
			<FlatList
				data={news}
				keyExtractor={keyExtractor}
				renderItem={renderItem}
				onMomentumScrollEnd={loadMore}
				onEndReachedThreshold={0.1}
				ListHeaderComponent={ListHeader}
				contentContainerStyle={[styles.gap_20, styles.pb_10]}
				ListFooterComponentStyle={{ height: RH(40) }}
				ListFooterComponent={
					<View>{isLoading ? <ActivityIndicator size={RH(30)} /> : null}</View>
				}
			/>
		</ScreenWrapper>
	)
}

News.displayName = 'News'
export default News
