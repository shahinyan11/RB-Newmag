import { DepthKeys } from '@/i18n'
import type { TIconNames } from '@/types'
import { navigate } from '@/navigation'
import SCREENS from '@/navigation/SCREENS'

export type TNavMenu = {
	title: DepthKeys
	data: TNavItem[]
}

export type TNavItem = {
	label: DepthKeys
	icon: TIconNames
	action?: () => void
}

const navMenu: TNavMenu[] = [
	{
		title: 'common.store',
		data: [
			{ label: 'common.orders', icon: 'menu-order', action: () => navigate(SCREENS.ORDERS) },
			{
				label: 'common.audioBooks',
				icon: 'menu-headphone',
				action: () => navigate(SCREENS.USER_AUDIOBOOKS),
			},
			{
				label: 'common.digitalBooks',
				icon: 'menu-digital-book',
				action: () => navigate(SCREENS.USER_DIGITAL_BOOKS),
			},
			{
				label: 'common.deliveryAddresses',
				icon: 'menu-delivery',
				action: () => navigate(SCREENS.DELIVERY_ADDRESSES),
			},
			{ label: 'common.paymentAndDeliveryTerms', icon: 'menu-payment' },
		],
	},
	{
		title: 'common.personalInformation',
		data: [
			{
				label: 'common.myPersonalInformation',
				icon: 'menu-personal-info',
				action: () => navigate(SCREENS.PERSONAL_INFO),
			},
			// { label: 'common.memberPlans', icon: 'menu-members' },
		],
	},
	{
		title: 'common.store',
		data: [
			{ label: 'common.publishingHouse', icon: 'menu-about' },
			{ label: 'common.advertising', icon: 'menu-about' },
			{
				label: 'common.termsOfBookOrdering',
				icon: 'menu-about',
				action: () => navigate(SCREENS.ORDERING_TERMS),
			},
		],
	},
]

export default navMenu
