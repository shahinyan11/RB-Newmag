import React, { useEffect, useState } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

import styles from './styles'
import ChildrenProps from '@/types/Utils/ChildrenProps'
import Text from '@/components/Text'
import SearchBar from '@/components/SearchBar'
import { updateFilterSearch } from '@/store/books'
import { useDispatch } from '@/store/hooks'
import { getBooksReq } from '@/store/books/operations'
import { useTranslation } from 'react-i18next'

type SearchBarProps = ChildrenProps & {
	containerStyle?: StyleProp<ViewStyle>
}

function SearchBarWrapper({ children, containerStyle }: SearchBarProps) {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const [value, setValue] = useState('')
	const [isFocused, setIsFocused] = useState(false)

	useEffect(() => {
		dispatch(updateFilterSearch(value))
	}, [value])

	useEffect(() => {
		if (isFocused) return

		dispatch(getBooksReq())
	}, [isFocused])

	return (
		<View style={styles.fl_1}>
			<SearchBar
				value={value}
				placeholder={t('common.searchBooks')}
				containerStyle={styles.ph_10}
				onFocusedStateChange={setIsFocused}
				onChangeText={setValue}
			/>
			{isFocused ? (
				<View style={[styles.fl_1]}>
					<Text size="S13" weight="300" style={[styles.as_c, styles.mt_a, styles.mb_a]}>
						{t('common.whichBookAreYouInterestedIn')}
					</Text>
				</View>
			) : (
				children
			)}
		</View>
	)
}

export default SearchBarWrapper
