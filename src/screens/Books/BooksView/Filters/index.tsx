import React, { useEffect, useMemo } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { openBottomSheet } from '@/store/modal'
import { useDispatch, useSelector } from '@/store/hooks'
import Icon from '@/components/Icon'
import { selectFilters } from '@/store/books/selectors'
import Colors from '@/theme/colors'
import styles from './styles'
import { getBooksReq } from '@/store/books/operations'
import { useTranslation } from 'react-i18next'

function Filters() {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const filters = useSelector(selectFilters)

	useEffect(() => {
		dispatch(getBooksReq())
	}, [filters])

	const openFilterAuthor = () => {
		dispatch(openBottomSheet({ type: 'SELECT_AUTHOR' }))
	}

	const openFilterCategory = () => {
		dispatch(openBottomSheet({ type: 'SELECT_CATEGORY' }))
	}

	const authorFilter = useMemo(
		() => ({
			label: `${t('common.author')} ${filters.author_ids.length > 0 ? `(${filters.author_ids.length})` : ''}`,
			color: filters.author_ids.length > 0 ? Colors.red500 : Colors.black500,
		}),
		[filters],
	)

	const categoryFilter = useMemo(
		() => ({
			label: `${t('common.category')} ${filters.category_ids.length > 0 ? `(${filters.category_ids.length})` : ''}`,
			color: filters.category_ids.length > 0 ? Colors.red500 : Colors.black500,
		}),
		[filters],
	)

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{t('tabs.books')}</Text>
			<View style={[styles.row, styles.gap_34]}>
				<TouchableOpacity style={styles.row} onPress={openFilterAuthor}>
					<Text style={[styles.filterLabel, { color: authorFilter.color }]}>
						{authorFilter.label}
					</Text>
					<Icon name="pointingDown" color={authorFilter.color} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.row} onPress={openFilterCategory}>
					<Text style={[styles.filterLabel, { color: categoryFilter.color }]}>
						{categoryFilter.label}
					</Text>
					<Icon name="pointingDown" color={categoryFilter.color} />
				</TouchableOpacity>
			</View>
		</View>
	)
}

Filters.displayName = 'Filters'
export default Filters
