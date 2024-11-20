import React, { FC, useEffect } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Header from '@/components/Header'
import styles from './styles'
import { useDispatch, useSelector } from '@/store/hooks'
import { getOrderingTerms } from '@/store/app/operations'
import { selectOrderingTerms } from '@/store/app/selectors'
import { selectLanguage } from '@/store/user/selectors'
import RenderHtml from 'react-native-render-html'
import { SCREEN_WIDTH } from '@gorhom/bottom-sheet'
import { ScrollView } from 'react-native'

const OrderingTermsScreen: FC = () => {
	const dispatch = useDispatch()
	const terms = useSelector(selectOrderingTerms)
	const lang = useSelector(selectLanguage)

	useEffect(() => {
		dispatch(getOrderingTerms())
	}, [])

	return (
		<ScreenWrapper
			HeaderComponent={<Header title={terms?.[`name_${lang}`]} />}
			contentContainerStyle={styles.container}
		>
			<ScrollView style={styles.fl_1} showsVerticalScrollIndicator={false}>
				<RenderHtml
					contentWidth={SCREEN_WIDTH}
					source={{ html: terms?.[`info_${lang}`] ?? '' }}
				/>
			</ScrollView>
		</ScreenWrapper>
	)
}

OrderingTermsScreen.displayName = 'OrderingTermsScreen'
export default OrderingTermsScreen
