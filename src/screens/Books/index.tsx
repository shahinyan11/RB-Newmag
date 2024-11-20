import React, { useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { BooksTabParamList } from '@/navigation/types'
import ScreenWrapper from '@/components/ScreenWrapper'
import BooksView from '@/screens/Books/BooksView'
import { useDispatch } from '@/store/hooks'
import { getBooksReq } from '@/store/books/operations'
import SearchBarWrapper from '@/components/SearchBarWrapper'

const BooksTab = createMaterialTopTabNavigator<BooksTabParamList>()

function BooksScreen() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getBooksReq())
	}, [])

	return (
		<ScreenWrapper>
			<SearchBarWrapper>
				<BooksView />
			</SearchBarWrapper>

			{/* TODO - replace the above ( <BooksView /> ) with the commented code on below to activate tabs */}
			{/*<BooksTab.Navigator*/}
			{/*	screenOptions={topTabNavigationOptions}*/}
			{/*	sceneContainerStyle={{ backgroundColor: 'transparent' }}*/}
			{/*>*/}
			{/*	<BooksTab.Screen*/}
			{/*		name={SCREENS.BOOKS_SHOP}*/}
			{/*		component={BooksView}*/}
			{/*		options={{ tabBarLabel: t('common.shopBooks') }}*/}
			{/*	/>*/}
			{/*	<BooksTab.Screen*/}
			{/*		name={SCREENS.BOOKS_FREE}*/}
			{/*		component={BooksView}*/}
			{/*		options={{ tabBarLabel: t('common.freeBooks') }}*/}
			{/*	/>*/}
			{/*</BooksTab.Navigator>*/}
		</ScreenWrapper>
	)
}

BooksScreen.displayName = 'BooksScreen'
export default BooksScreen
