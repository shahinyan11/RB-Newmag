import navigationRef from '@/navigation/navigationRef'
import { RootStackParamList } from '@/navigation/types'

export function navigate<Screen extends keyof RootStackParamList>(
	name: Screen,
	params?: RootStackParamList[Screen],
) {
	if (navigationRef.isReady()) {
		/* @ts-ignore */
		navigationRef.navigate(name, params)
	}
}

export function goBack() {
	if (navigationRef.isReady()) {
		navigationRef.goBack()
	}
}
