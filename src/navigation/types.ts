import SCREENS from '@/navigation/SCREENS'
import type { StackNavigationProp } from '@react-navigation/stack'
import { TAddress, TNotification, TOrder } from '@/types'

export type RootStackParamList = PublicScreensParamList &
	PrivateScreensParamList &
	BottomTabScreensParamList
export type NavigationProp = StackNavigationProp<RootStackParamList>

export type PublicScreensParamList = {
	[SCREENS.SIGN_IN]: undefined
	[SCREENS.SIGN_UP]: undefined
	[SCREENS.FORGOT_PASSWORD]: undefined
	[SCREENS.RESET_PASSWORD]: undefined
	[SCREENS.VERIFY_CODE]: { email: string }
	[SCREENS.ENTER_NEW_PASSWORD]: { email: string; code: string | number }
	[SCREENS.PASSWORD_UPDATED]: undefined
}
export type PrivateScreensParamList = {
	[SCREENS.BOTTOM_TAB]: BottomTabScreensParamList
	[SCREENS.NOTIFICATIONS]?: NotificationsTabParamList
	[SCREENS.SINGLE_NOTIFICATION]: { notification: TNotification }
	[SCREENS.SINGLE_BOOK]: { bookId: string }
	[SCREENS.SINGLE_AUDIOBOOK]: { bookId: string }
	[SCREENS.SINGLE_CHANNEL]: { channelId: string }
	[SCREENS.SINGLE_NEWS]: { newsId: string }
	[SCREENS.ACCOUNT]: undefined
	[SCREENS.BECOME_PREMIUM]: undefined
	[SCREENS.ORDERS]: undefined
	[SCREENS.SINGLE_ORDER]: { order?: TOrder }
	[SCREENS.USER_AUDIOBOOKS]: undefined
	[SCREENS.USER_DIGITAL_BOOKS]: undefined
	[SCREENS.DELIVERY_ADDRESSES]: undefined
	[SCREENS.ADD_DELIVERY_ADDRESSES]?: { address: TAddress }
	[SCREENS.CART]: undefined
	[SCREENS.CHECKOUT]: undefined
	[SCREENS.NEWS]: undefined
	[SCREENS.ORDERING_TERMS]: undefined
	[SCREENS.PAYMENT]: undefined
	[SCREENS.DIGITAL_BOOK]: { title?: string; bookId?: string }
	[SCREENS.PERSONAL_INFO]: undefined

	// Modal Screens
	[SCREENS.AUDIO_SPEED_MODAL]: undefined
	[SCREENS.DELETE_ADDRESS]: { addressId: string }
	[SCREENS.SELECT_ADDRESS_MODAL]: undefined
}
export type BottomTabScreensParamList = {
	[SCREENS.HOME]: undefined
	[SCREENS.BOOKS]?: BooksTabParamList
	[SCREENS.AUDIOBOOKS]: undefined
	[SCREENS.NEWS]: undefined
	[SCREENS.PODCAST]: undefined
}
export type NotificationsTabParamList = {
	[SCREENS.NOTIFICATIONS_NEW]: { isRead?: boolean }
	[SCREENS.NOTIFICATIONS_HISTORY]: { isRead?: boolean }
}
export type BooksTabParamList = {
	[SCREENS.BOOKS_SHOP]: undefined
	[SCREENS.BOOKS_FREE]: undefined
}
