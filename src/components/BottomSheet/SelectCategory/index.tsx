import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Text, View } from 'react-native'
import BottomSheet, { BottomSheetFlatList, BottomSheetProps } from '@gorhom/bottom-sheet'
import Checkbox from '@/components/Checkbox'
import Button from '@/components/Button'
import { RH } from '@/theme'
import styles from './styles'
import { getCategoriesReq } from '@/store/books/operations'
import { useDispatch } from '@/store/hooks'
import { useSelector } from 'react-redux'
import { selectCategories, selectFilterCategories } from '@/store/books/selectors'
import { TCategories } from '@/types'
import { updateFilterCategories } from '@/store/books'
import { useTranslation } from 'react-i18next'

const SelectCategory = ({ onClose }: BottomSheetProps) => {
	const { t } = useTranslation()
	const sheetRef = useRef<BottomSheet>(null)
	const dispatch = useDispatch()
	const categories = useSelector(selectCategories)
	const filterCategories = useSelector(selectFilterCategories)
	const [selectedCategories, setSelectedCategories] = useState<string[]>([])

	useEffect(() => {
		dispatch(getCategoriesReq())
	}, [])

	useEffect(() => {
		setSelectedCategories([...filterCategories])
	}, [filterCategories])

	const handlePress = (id: string) => (checked: boolean) => {
		if (checked) {
			setSelectedCategories(prev => [...prev, id])
		} else {
			setSelectedCategories(prev => prev.filter(val => val !== id))
		}
	}

	const handleSelect = () => {
		dispatch(updateFilterCategories([...selectedCategories]))
		sheetRef.current?.close()
	}

	const renderItem = useCallback(
		({ item }: { item: TCategories }) => (
			<Checkbox
				text={item.name}
				onPress={handlePress(item.id)}
				isChecked={selectedCategories.includes(item.id)}
			/>
		),
		[selectedCategories],
	)

	return (
		<BottomSheet
			ref={sheetRef}
			index={0}
			snapPoints={[RH(485)]}
			onClose={onClose}
			containerStyle={styles.container}
			backgroundStyle={styles.sheetBackground}
			handleIndicatorStyle={styles.indicator}
			keyboardBehavior="extend"
			enablePanDownToClose={true}
		>
			<View style={styles.content}>
				<Text style={styles.title}>{t('common.selectCategory')}</Text>
				<BottomSheetFlatList
					data={categories}
					renderItem={renderItem}
					showsVerticalScrollIndicator={false}
				/>
				<Button label={t('common.select')} onPress={handleSelect} style={styles.button} />
			</View>
		</BottomSheet>
	)
}

SelectCategory.displayName = 'SelectCategory'
export default SelectCategory
