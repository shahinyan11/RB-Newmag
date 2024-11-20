import { StackNavigationOptions, TransitionPresets } from '@react-navigation/stack'
import DEVICE from '@/constants/DEVICE'

const modalScreenOptions: StackNavigationOptions = {
	presentation: 'modal',
	cardStyle: { backgroundColor: 'transparent' },
	gestureResponseDistance: DEVICE.SCREEN_HEIGHT,
	...(DEVICE.IS_ANDROID && TransitionPresets.ModalPresentationIOS),
	gestureEnabled: true,
	animationEnabled: true,
}

export default modalScreenOptions
