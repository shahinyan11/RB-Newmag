import React from 'react'
import type { NavigationState } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from '@/navigation/AppNavigator'
import linkingConfig from './linkingConfig'
import navigationRef from './navigationRef'

type NavigationRootProps = {
	/** Fired when react-navigation is ready */
	onReady?: () => void
}

function NavigationRoot({}: NavigationRootProps) {
	const handleStateChange = (state: NavigationState | undefined) => {
		//
	}

	return (
		<NavigationContainer
			onStateChange={handleStateChange}
			ref={navigationRef}
			linking={linkingConfig}
		>
			<AppNavigator />
		</NavigationContainer>
	)
}

NavigationRoot.displayName = 'NavigationRoot'

export default NavigationRoot
