import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { Image, ScrollView, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import RenderHtml from 'react-native-render-html'

import { PrivateScreensParamList } from '@/navigation/types'
import { selectCurrentNews } from '@/store/news/selectors'
import { useDispatch, useSelector } from '@/store/hooks'
import { getNewsById } from '@/store/news/operations'
import ScreenWrapper from '@/components/ScreenWrapper'
import LocalHeader from './LocalHeader'
import styles from './styles'
import Icon from '@/components/Icon'
import formatDate from '@/utils/formatDate'
import Text from '@/components/Text'
import DEVICE from '@/constants/DEVICE'
import { RW } from '@/theme'
import TextSettings from '@/components/BottomSheet/TextSettings'
import BottomSheet from '@gorhom/bottom-sheet'
import { BG_SETTINGS } from '@/constants/CONST'

const SingleNewsScreen: FC<StackScreenProps<PrivateScreensParamList, 'singleNews'>> = ({
	route,
}) => {
	const dispatch = useDispatch()
	const currentNews = useSelector(selectCurrentNews)
	const modalRef = useRef<BottomSheet>(null)
	const [bgSettings, setBgSettings] = useState<(typeof BG_SETTINGS)[number]>()
	const [fontSize, setFontSize] = useState<number>()
	const [aspectRatio, setAspectRatio] = useState(1)

	useEffect(() => {
		dispatch(getNewsById(route.params.newsId))
	}, [])

	useEffect(() => {
		if (!currentNews?.image) return

		Image.getSize(currentNews?.image, (width, height) => {
			setAspectRatio(width / height)
		})
	}, [currentNews])

	const handleSettingPress = () => {
		modalRef.current?.expand()
	}

	const handleBgSettingsChange = useCallback((setting: (typeof BG_SETTINGS)[number]) => {
		setBgSettings(setting)
	}, [])

	const handleFontSizeChange = useCallback((size: number) => {
		setFontSize(size)
	}, [])

	return (
		<ScreenWrapper HeaderComponent={<LocalHeader onPress={handleSettingPress} />}>
			<ScrollView style={styles.fl_1}>
				<Image source={{ uri: currentNews?.image }} style={styles.image} />
				<View style={[styles.ph_10, styles.pv_20, bgSettings?.bgStyle]}>
					<View style={[styles.row, styles.mb_16]}>
						<Icon style={styles.mr_6} name="calendar" />
						<Text size="S14" color="gray800">
							{formatDate(+(currentNews?.created_at ?? 0))}
						</Text>
					</View>
					<View>
						<RenderHtml
							contentWidth={DEVICE.SCREEN_WIDTH - RW(20)}
							source={{ html: currentNews?.info ?? '' }}
							tagsStyles={{ p: { ...bgSettings?.textStyle, fontSize } }}
							ignoredDomTags={['o:p', 'iframe']}
						/>
					</View>
				</View>
			</ScrollView>
			<TextSettings
				ref={modalRef}
				onBgChange={handleBgSettingsChange}
				onFontSizeChange={handleFontSizeChange}
			/>
		</ScreenWrapper>
	)
}

SingleNewsScreen.displayName = 'SingleNewsScreen'
export default SingleNewsScreen
