import React, { useCallback, useEffect } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'

import Colors from '@/theme/colors'
import type { TAudiobook } from '@/types'
import { getAudiobooksReq } from '@/store/audiobooks/operations'
import { openBottomSheet } from '@/store/modal'
import { useDispatch, useSelector } from '@/store/hooks'
import AudioBookCard from '@/components/cards/AudioBookCard'
import EmptyList from '@/components/emptyViews/EmptyList'
import ScreenWrapper from '@/components/ScreenWrapper'
import Icon from '@/components/Icon'
import styles from './styles'
import { selectAudiobooks } from '@/store/audiobooks/selectors'
import { selectIsLoading } from '@/store/app/selectors'
import { RH } from '@/theme'
import { audiobooksEndpoint } from '@/store/audiobooks/endpoints'

function AudiobooksScreen() {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const audiobooks = useSelector(selectAudiobooks)
	const isLoading = useSelector(selectIsLoading(audiobooksEndpoint.endpoint))

	useEffect(() => {
		dispatch(getAudiobooksReq())
	}, [])

	const renderBookItem = useCallback(
		({ item }: { item: TAudiobook }) => (
			<AudioBookCard data={item} priceStyle={{ color: Colors.red500 }} {...item} />
		),
		[],
	)

	const openFilterAuthor = () => {
		dispatch(openBottomSheet({ type: 'SELECT_AUTHOR' }))
	}

	const openFilterCategory = () => {
		dispatch(openBottomSheet({ type: 'SELECT_CATEGORY' }))
	}

	return (
		<ScreenWrapper>
			<FlatList
				data={audiobooks}
				renderItem={renderBookItem}
				contentContainerStyle={styles.listContainer}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={!isLoading ? EmptyList : null}
				ListHeaderComponent={
					<View style={styles.topContainer}>
						<Text style={styles.title}>{t('tabs.audioBooks')}</Text>
						<View style={[styles.row, styles.gap_34]}>
							<TouchableOpacity style={styles.row} onPress={openFilterAuthor}>
								<Text style={styles.filterLabel}>{t('common.author')}</Text>
								<Icon name="pointingDown" />
							</TouchableOpacity>
							<TouchableOpacity style={styles.row} onPress={openFilterCategory}>
								<Text style={styles.filterLabel}>{t('common.category')}</Text>
								<Icon name="pointingDown" />
							</TouchableOpacity>
						</View>
					</View>
				}
				ListFooterComponent={
					<View>{isLoading ? <ActivityIndicator size={RH(30)} /> : null}</View>
				}
			/>
		</ScreenWrapper>
	)
}

AudiobooksScreen.displayName = 'AudiobooksScreen'
export default AudiobooksScreen
