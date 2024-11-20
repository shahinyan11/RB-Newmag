import { FC } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { ACTIVE_OPACITY } from '@/constants/CONST'

const Pressable: FC<TouchableOpacityProps> = ({ children, ...props }) => {
	return (
		<TouchableOpacity activeOpacity={ACTIVE_OPACITY} {...props}>
			{children}
		</TouchableOpacity>
	)
}

Pressable.displayName = 'Pressable'
export default Pressable
