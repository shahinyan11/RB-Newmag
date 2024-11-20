import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import BottomTabBar from './components/BottomTabBar'
import { BottomTabScreensParamList } from '@/navigation/types'
import SCREENS from '@/navigation/SCREENS'
import Home from '@/screens/Home'
import colors from '@/theme/colors'
import BooksScreen from '@/screens/Books'
import AudiobooksScreen from '@/screens/Audiobooks'
import NewsScreen from '@/screens/News'
import PodcastScreen from '@/screens/Podcast'
import { useTranslation } from 'react-i18next'

const Tab = createBottomTabNavigator<BottomTabScreensParamList>()

const BottomTabNavigator = () => {
	const { t } = useTranslation()

	return (
		<Tab.Navigator
			tabBar={BottomTabBar}
			screenOptions={{ headerShown: false }}
			sceneContainerStyle={{ backgroundColor: colors.white }}
		>
			<Tab.Screen name={SCREENS.HOME} component={Home} options={{ title: t('tabs.home') }} />
			<Tab.Screen
				name={SCREENS.BOOKS}
				component={BooksScreen}
				options={{ title: t('tabs.books') }}
			/>
			<Tab.Screen
				name={SCREENS.AUDIOBOOKS}
				component={AudiobooksScreen}
				options={{ title: t('tabs.audioBooks') }}
			/>
			<Tab.Screen
				name={SCREENS.NEWS}
				component={NewsScreen}
				options={{ title: t('tabs.news') }}
			/>
			<Tab.Screen
				name={SCREENS.PODCAST}
				component={PodcastScreen}
				options={{ title: t('tabs.podcast') }}
			/>
		</Tab.Navigator>
	)
}

BottomTabNavigator.displayName = 'BottomTabNavigator'
export default BottomTabNavigator
