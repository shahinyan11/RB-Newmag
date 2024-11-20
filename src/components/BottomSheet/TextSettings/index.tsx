import React, {
	forwardRef,
	useCallback,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from 'react'
import { View } from 'react-native'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import styles from './styles'
import Text from '@/components/Text'
import Pressable from '@/components/Pressable'
import { BG_SETTINGS } from '@/constants/CONST'
import { normalizePixel } from '@/theme'
import { useTranslation } from 'react-i18next'

type TextSettingsProps = {
	onBgChange: (setting: (typeof BG_SETTINGS)[number]) => void
	onFontSizeChange: (size: number) => void
}

const TextSettings = forwardRef(({ onBgChange, onFontSizeChange }: TextSettingsProps, ref) => {
	const { t } = useTranslation()
	const sheetRef = useRef<BottomSheet>(null)
	const [selectedIndex, setSelectedIndex] = useState(0)
	const [fontSize, setFontSize] = useState(normalizePixel(16))

	useImperativeHandle(
		ref,
		() => ({
			expand: sheetRef.current?.expand,
		}),
		[],
	)

	useEffect(() => {
		onFontSizeChange(fontSize)
	}, [fontSize])

	const handleSelectBackground = useCallback(
		(index: number) => () => {
			setSelectedIndex(index)
			onBgChange(BG_SETTINGS[index])
		},
		[],
	)

	const handleIncreaseFontSize = useCallback(() => {
		setFontSize(prev => prev + 1)
	}, [])

	const handleDecreaseFontSize = useCallback(() => {
		setFontSize(prev => prev - 1)
	}, [])

	return (
		<BottomSheet
			ref={sheetRef}
			index={-1}
			snapPoints={[1]}
			enableDynamicSizing
			enablePanDownToClose={true}
			handleComponent={null}
			backgroundStyle={styles.backgroundContainer}
		>
			<BottomSheetView>
				<View style={styles.content}>
					<View style={styles.indicator} />
					<Text size="S20" style={styles.title} color="black500">
						{t('common.textSettings')}
					</Text>
					<View style={styles.gap_20}>
						<View style={[styles.row, styles.gap_14]}>
							<Text color="gray800" style={styles.mr_a}>
								{t('common.background')}
							</Text>
							{BG_SETTINGS.map((item, index) => (
								<Pressable
									key={item.id}
									style={[
										styles.optionBox,
										item.bgStyle,
										selectedIndex === index && styles.selectedBox,
									]}
									onPress={handleSelectBackground(index)}
								>
									<Text style={item.textStyle}>Aa</Text>
								</Pressable>
							))}
						</View>
						<View style={[styles.row, styles.gap_14]}>
							<Text color="gray800" style={styles.mr_a}>
								{t('common.textSettings')}
							</Text>
							<Pressable style={styles.optionBox} onPress={handleDecreaseFontSize}>
								<Text>- Aa</Text>
							</Pressable>
							<Pressable style={styles.optionBox} onPress={handleIncreaseFontSize}>
								<Text>+ Aa</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</BottomSheetView>
		</BottomSheet>
	)
})

TextSettings.displayName = 'TextSettings'
export default TextSettings
