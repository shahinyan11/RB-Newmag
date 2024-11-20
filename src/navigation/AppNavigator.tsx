import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import BottomTabNavigator from '@/navigation/BottomTabNavigator'
import { RootStackParamList } from '@/navigation/types'
import SCREENS from '@/navigation/SCREENS'
import EnterNewPasswordScreen from '@/screens/auth/EnterNewPassword'
import SingleNotificationScreen from '@/screens/SingleNotification'
import ForgotPasswordScreen from '@/screens/auth/ForgotPassword'
import ResetPasswordScreen from '@/screens/auth/ResetPassword'
import PasswordUpdated from '@/screens/auth/PasswordUpdated'
import NotificationsScreen from '@/screens/Notifications'
import { selectAuthToken } from '@/store/auth/selectors'
import SignInScreen from '@/screens/auth/SignIn'
import SignUpScreen from '@/screens/auth/SignUp'
import { useSelector } from '@/store/hooks'
import defaultScreenOptions from './options/defaultScreenOptions'
import SingleBook from '@/screens/SingleBook'
import SingleAudiobook from '@/screens/SingleAudiobook'
import AudioSpeedModal from '@/screens/modalsScreens/AudioSpeedModal'
import SingleChannel from '@/screens/SingleChannel'
import modalScreenOptions from '@/navigation/options/modalScreenOptions'
import AccountScreen from '@/screens/Account'
import BecomePremiumScreen from '@/screens/BecomePremium'
import Orders from '@/screens/Orders'
import SingleOrder from '@/screens/SingleOrder'
import UserAudiobooks from '@/screens/UserAudiobooks'
import UserDigitalBooks from '@/screens/UserDigitalBooks'
import DeliveryAddresses from '@/screens/DeliveryAddresses'
import AddDeliveryAddressScreen from '@/screens/AddDeliveryAddress'
import DeleteAddressModal from '@/screens/modalsScreens/DeleteAddressModal'
import Cart from '@/screens/Cart'
import Checkout from '@/screens/Checkout'
import SingleNewsScreen from '@/screens/SingleNews'
import OrderingTermsScreen from '@/screens/OrderingTerms'
import Payment from '@/screens/Payment'
import DigitalBook from '@/screens/DigitalBook'
import VerifyCodeScreen from '@/screens/auth/VerifyCode'
import PersonalInfoScreen from '@/screens/PersonalInfo'

export const RootStack = createStackNavigator<RootStackParamList>()

function AppNavigator() {
	const token = useSelector(selectAuthToken)

	return (
		<RootStack.Navigator screenOptions={defaultScreenOptions}>
			{!token ? (
				<RootStack.Group>
					<RootStack.Screen name={SCREENS.SIGN_IN} component={SignInScreen} />
					<RootStack.Screen name={SCREENS.SIGN_UP} component={SignUpScreen} />
					<RootStack.Screen
						name={SCREENS.FORGOT_PASSWORD}
						component={ForgotPasswordScreen}
					/>
					<RootStack.Screen
						name={SCREENS.RESET_PASSWORD}
						component={ResetPasswordScreen}
					/>
					<RootStack.Screen name={SCREENS.VERIFY_CODE} component={VerifyCodeScreen} />
					<RootStack.Screen
						name={SCREENS.ENTER_NEW_PASSWORD}
						component={EnterNewPasswordScreen}
					/>
					<RootStack.Screen name={SCREENS.PASSWORD_UPDATED} component={PasswordUpdated} />
				</RootStack.Group>
			) : (
				<>
					<RootStack.Screen name={SCREENS.BOTTOM_TAB} component={BottomTabNavigator} />
					<RootStack.Screen name={SCREENS.SINGLE_BOOK} component={SingleBook} />
					<RootStack.Screen name={SCREENS.SINGLE_AUDIOBOOK} component={SingleAudiobook} />
					<RootStack.Screen
						name={SCREENS.NOTIFICATIONS}
						component={NotificationsScreen}
					/>
					<RootStack.Screen
						name={SCREENS.SINGLE_NOTIFICATION}
						component={SingleNotificationScreen}
					/>
					<RootStack.Screen name={SCREENS.SINGLE_CHANNEL} component={SingleChannel} />
					<RootStack.Screen name={SCREENS.ACCOUNT} component={AccountScreen} />
					<RootStack.Screen
						name={SCREENS.BECOME_PREMIUM}
						component={BecomePremiumScreen}
					/>
					<RootStack.Screen name={SCREENS.ORDERS} component={Orders} />
					<RootStack.Screen name={SCREENS.SINGLE_ORDER} component={SingleOrder} />
					<RootStack.Screen name={SCREENS.USER_AUDIOBOOKS} component={UserAudiobooks} />
					<RootStack.Screen
						name={SCREENS.USER_DIGITAL_BOOKS}
						component={UserDigitalBooks}
					/>
					<RootStack.Screen
						name={SCREENS.DELIVERY_ADDRESSES}
						component={DeliveryAddresses}
					/>
					<RootStack.Screen
						name={SCREENS.ADD_DELIVERY_ADDRESSES}
						component={AddDeliveryAddressScreen}
					/>
					<RootStack.Screen name={SCREENS.CART} component={Cart} />
					<RootStack.Screen name={SCREENS.CHECKOUT} component={Checkout} />
					<RootStack.Screen name={SCREENS.NEWS} component={Checkout} />
					<RootStack.Screen name={SCREENS.SINGLE_NEWS} component={SingleNewsScreen} />
					<RootStack.Screen
						name={SCREENS.ORDERING_TERMS}
						component={OrderingTermsScreen}
					/>
					<RootStack.Screen name={SCREENS.PAYMENT} component={Payment} />
					<RootStack.Screen name={SCREENS.DIGITAL_BOOK} component={DigitalBook} />
					<RootStack.Screen name={SCREENS.PERSONAL_INFO} component={PersonalInfoScreen} />

					<RootStack.Group screenOptions={modalScreenOptions}>
						<RootStack.Screen
							name={SCREENS.AUDIO_SPEED_MODAL}
							component={AudioSpeedModal}
						/>
						<RootStack.Screen
							name={SCREENS.DELETE_ADDRESS}
							component={DeleteAddressModal}
						/>
						<RootStack.Screen
							name={SCREENS.SELECT_ADDRESS_MODAL}
							component={DeleteAddressModal}
						/>
					</RootStack.Group>
				</>
			)}
		</RootStack.Navigator>
	)
}

AppNavigator.displayName = 'AppNavigator'
export default AppNavigator
