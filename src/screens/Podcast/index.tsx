import React, { useCallback, useEffect } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'
import { RH } from '@/theme'
import type { TChannel } from '@/types'
import { channelsEndpoint } from '@/store/channels/endpoints'
import { getChannelsReq } from '@/store/channels/operations'
import { selectChannels } from '@/store/channels/selectors'
import { useDispatch, useSelector } from '@/store/hooks'
import { selectIsLoading } from '@/store/app/selectors'
import EmptyList from '@/components/emptyViews/EmptyList'
import ChannelCard from '@/components/cards/ChannelCard'
import ScreenWrapper from '@/components/ScreenWrapper'
import SearchBar from '@/components/SearchBar'
import Text from '@/components/Text'
import styles from './styles'
import { useTranslation } from 'react-i18next'

function PodcastScreen() {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const channels = useSelector(selectChannels)
	const isLoading = useSelector(selectIsLoading(channelsEndpoint.endpoint))

	useEffect(() => {
		dispatch(getChannelsReq())
	}, [])

	const loadMore = useCallback(() => {
		dispatch(getChannelsReq(true))
	}, [])

	const renderItem = useCallback(
		({ item }: { item: TChannel }) => <ChannelCard data={item} />,
		[],
	)

	return (
		<ScreenWrapper>
			<SearchBar placeholder={t('common.searchChannels')} containerStyle={styles.ph_10} />
			<View style={styles.container}>
				<FlatList
					data={channels}
					numColumns={2}
					renderItem={renderItem}
					onMomentumScrollEnd={loadMore}
					onEndReachedThreshold={0.1}
					ListFooterComponentStyle={{ height: RH(40) }}
					columnWrapperStyle={styles.listColumnWrapper}
					contentContainerStyle={styles.listContainer}
					showsVerticalScrollIndicator={false}
					ListEmptyComponent={!isLoading ? EmptyList : null}
					ListHeaderComponent={
						<View style={styles.topContainer}>
							<Text size="S20" weight="600" color="black500">
								{t('common.allChannels')}
							</Text>

							{/*<TouchableOpacity style={styles.row} onPress={undefined}>*/}
							{/*	<Text size="S18" weight="600" color="black" style={styles.mr_6}>*/}
							{/*		{t('common.sortBy')}*/}
							{/*	</Text>*/}
							{/*	<Icon name="pointingDown" />*/}
							{/*</TouchableOpacity>*/}
						</View>
					}
					ListFooterComponent={
						<View>{isLoading ? <ActivityIndicator size={RH(30)} /> : null}</View>
					}
				/>
			</View>
		</ScreenWrapper>
	)
}

PodcastScreen.displayName = 'PodcastScreen'
export default PodcastScreen
