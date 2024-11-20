import { DepthKeys } from '@/i18n'
import type { TIconNames } from '@/types'

export type TNavMenu = {
	title: DepthKeys
	data: TNavItem[]
}

export type TNavItem = {
	label: DepthKeys
	icon: TIconNames
}

const navMenu: TNavMenu[] = [
	{
		title: 'common.store',
		data: [
			{ label: 'common.orders', icon: 'menu-order' },
			{ label: 'common.audioBooks', icon: 'menu-headphone' },
			{ label: 'common.digitalBooks', icon: 'menu-digital-book' },
			{ label: 'common.deliveryAddresses', icon: 'menu-delivery' },
			{ label: 'common.paymentAndDeliveryTerms', icon: 'menu-payment' },
		],
	},
	{
		title: 'common.personalInformation',
		data: [
			{ label: 'common.myPersonalInformation', icon: 'menu-personal-info' },
			{ label: 'common.memberPlans', icon: 'menu-members' },
		],
	},
	{
		title: 'common.store',
		data: [
			{ label: 'common.publishingHouse', icon: 'menu-about' },
			{ label: 'common.advertising', icon: 'menu-about' },
			{ label: 'common.termsOfBookOrdering', icon: 'menu-about' },
		],
	},
]

export default navMenu
