import { FC, useMemo } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import ChildrenProps from '@/types/Utils/ChildrenProps'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styles from '@/styles'

type SafeAreaContainerProps = ChildrenProps & {
	containerStyle?: StyleProp<ViewStyle>
}

const SafeAreaContainer: FC<SafeAreaContainerProps> = ({ children, containerStyle }) => {
	const insets = useSafeAreaInsets()

	const insetsStyle = useMemo(
		() => ({
			paddingTop: insets.top,
			paddingBottom: insets.bottom,
		}),
		[insets],
	)

	return <View style={[styles.fl_1, insetsStyle, containerStyle]}>{children}</View>
}

SafeAreaContainer.displayName = 'SafeAreaContainer'
export default SafeAreaContainer
