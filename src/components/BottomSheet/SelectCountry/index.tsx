import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { View } from 'react-native'
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import Button from '@/components/Button'
import styles from './styles'
import { useSelector } from 'react-redux'
import { TCountry } from '@/types'
import { selectDeliveryCountries } from '@/store/app/selectors'
import Pressable from '@/components/Pressable'
import Icon from '@/components/Icon'
import Text from '@/components/Text'
import { useTranslation } from 'react-i18next'

type SelectCountryProps = {
	onClose: () => void
	onSelect: (country: TCountry) => void
	defaultSelected?: TCountry
}

const SelectCountry: FC<SelectCountryProps> = ({ onClose, onSelect, defaultSelected }) => {
	const { t } = useTranslation()
	const sheetRef = useRef<BottomSheet>(null)
	const countries = useSelector(selectDeliveryCountries)
	const [selected, setSelected] = useState<TCountry | undefined>()

	useEffect(() => {
		setSelected(defaultSelected)
	}, [defaultSelected])

	const handleSelect = useCallback(() => {
		if (selected) onSelect(selected)
		sheetRef.current?.close()
	}, [selected])

	const handleSheetChange = useCallback(() => {
		setSelected(undefined)
	}, [])

	const renderItem = useCallback(
		({ item }: { item: TCountry }) => (
			<Pressable style={styles.countyItem} onPress={() => setSelected(item)}>
				<Text>{item.name}</Text>
				{item.id === selected?.id && <Icon name="checkArrow" size={20} disabled={true} />}
			</Pressable>
		),
		[selected],
	)

	return (
		<BottomSheet
			ref={sheetRef}
			animateOnMount
			index={0}
			snapPoints={['60%']}
			onChange={handleSheetChange}
			onClose={onClose}
			containerStyle={styles.container}
			backgroundStyle={styles.sheetBackground}
			handleIndicatorStyle={styles.indicator}
			keyboardBehavior="extend"
			enablePanDownToClose={true}
		>
			<View style={styles.content}>
				<Text style={styles.title}>{t('common.selectCountry')}</Text>
				<BottomSheetFlatList
					data={countries}
					renderItem={renderItem}
					showsVerticalScrollIndicator={false}
					ItemSeparatorComponent={() => (
						<View style={[styles.line_h, styles.bgc_gray100]} />
					)}
				/>
				<Button label={t('common.select')} style={styles.button} onPress={handleSelect} />
			</View>
		</BottomSheet>
	)
}

SelectCountry.displayName = 'SelectCountry'
export default SelectCountry
