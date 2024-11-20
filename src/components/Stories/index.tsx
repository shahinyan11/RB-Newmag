import React from 'react'
import { View } from 'react-native'
import InstagramStories from '@birdwingo/react-native-instagram-stories'
import { RW } from '@/theme'
import { storiesMock } from '@/mockData'

function Stories() {
	return (
		<View>
			<InstagramStories
				stories={storiesMock}
				avatarSize={80}
				avatarListContainerStyle={{ gap: RW(14) }}
			/>
		</View>
	)
}

Stories.displayName = Stories
export default Stories
