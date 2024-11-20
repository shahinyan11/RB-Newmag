import { FC } from 'react'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'
import Text from '@/components/Text'
import { TNavItem } from '@/screens/Account/navMenu'
import Icon from '@/components/Icon'
import Colors from '@/theme/colors'
import { SIZES } from '@/constants/SIZES'
import styles from './styles'
import * as CONST from '@/constants/CONST'
import { useTranslation } from 'react-i18next'

type NavItemProps = {
	containerStyle?: StyleProp<ViewStyle>
	data: TNavItem
}

const NavItem: FC<NavItemProps> = ({ containerStyle, data }) => {
	const { t } = useTranslation()

	return (
		<TouchableOpacity
			style={[styles.container, containerStyle]}
			activeOpacity={CONST.ACTIVE_OPACITY}
			onPress={data?.action}
		>
			<Icon name={data.icon} color={Colors.black} size={SIZES.S22} />
			<Text style={styles.fl_1}>{t(data.label)}</Text>
			<Icon name="chevron-right" style={styles.mr_10} />
		</TouchableOpacity>
	)
}

NavItem.displayName = 'NavItem'
export default NavItem
