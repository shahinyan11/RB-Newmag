import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Text, View } from 'react-native'
import BottomSheet, { BottomSheetFlatList, BottomSheetProps } from '@gorhom/bottom-sheet'
import Checkbox from '@/components/Checkbox'
import styles from './styles'
import type { TAuthor } from '@/types'
import Button from '@/components/Button'
import { RH } from '@/theme'
import { getAuthorsReq } from '@/store/books/operations'
import { useDispatch } from '@/store/hooks'
import { useSelector } from 'react-redux'
import { selectAuthors, selectFilterAuthors } from '@/store/books/selectors'
import { updateFilterAuthors } from '@/store/books'
import { useTranslation } from 'react-i18next'

const SelectAuthor = ({ onClose }: BottomSheetProps) => {
	const { t } = useTranslation()
	const sheetRef = useRef<BottomSheet>(null)
	const dispatch = useDispatch()
	const authors = useSelector(selectAuthors)
	const filterAuthors = useSelector(selectFilterAuthors)
	const [selectedAuthors, setSelectedAuthors] = useState<string[]>([])

	useEffect(() => {
		dispatch(getAuthorsReq())
	}, [])

	useEffect(() => {
		setSelectedAuthors([...filterAuthors])
	}, [filterAuthors])

	const handlePress = (id: string) => (checked: boolean) => {
		if (checked) {
			setSelectedAuthors(prev => [...prev, id])
		} else {
			setSelectedAuthors(prev => prev.filter(val => val !== id))
		}
	}

	const handleSelect = () => {
		dispatch(updateFilterAuthors([...selectedAuthors]))
		sheetRef.current?.close()
	}

	const renderItem = useCallback(
		({ item }: { item: TAuthor }) => (
			<Checkbox
				text={item.name}
				onPress={handlePress(item.id)}
				isChecked={selectedAuthors.includes(item.id)}
			/>
		),
		[selectedAuthors],
	)

	return (
		<BottomSheet
			ref={sheetRef}
			index={0}
			snapPoints={[RH(585)]}
			onClose={onClose}
			containerStyle={styles.container}
			backgroundStyle={styles.sheetBackground}
			handleIndicatorStyle={styles.indicator}
			keyboardBehavior="extend"
			enablePanDownToClose={true}
		>
			<View style={styles.content}>
				<Text style={styles.title}>{t('common.selectAuthor')}</Text>
				<BottomSheetFlatList
					data={authors}
					renderItem={renderItem}
					showsVerticalScrollIndicator={false}
				/>
				<Button label={t('common.select')} onPress={handleSelect} style={styles.button} />
			</View>
		</BottomSheet>
	)
}

SelectAuthor.displayName = 'SelectAuthor'
export default SelectAuthor
