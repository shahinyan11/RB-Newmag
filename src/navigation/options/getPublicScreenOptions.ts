import SCREENS from '@/navigation/SCREENS'
import defaultScreenOptions from './defaultScreenOptions'

function getRootNavigatorScreenOptions() {
	return {
		[SCREENS.SIGN_IN]: defaultScreenOptions,
		[SCREENS.SIGN_UP]: defaultScreenOptions,
		[SCREENS.FORGOT_PASSWORD]: defaultScreenOptions,
	}
}

export default getRootNavigatorScreenOptions
