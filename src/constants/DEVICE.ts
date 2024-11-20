import { Dimensions, Platform } from 'react-native'

const { height, width } = Dimensions.get('window')

export default {
	SCREEN_HEIGHT: height,
	SCREEN_WIDTH: width,
	IS_IOS: Platform.OS === 'ios',
	IS_ANDROID: Platform.OS === 'android',
}
