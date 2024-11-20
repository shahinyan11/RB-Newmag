import { SvgProps } from 'react-native-svg'
import { ICONS } from '@/components/Icon/ICONS'
import { BOOK_TYPES } from '@/constants/CONST'

export * from './paths'

export type valueof<T> = T[keyof T]

export type TLang = 'en' | 'am'

export type TFunc = () => void

export type TAnyFunc = (...args: any[]) => any

export type TIcon = SvgProps & {
	color?: string
	bgColor?: string
	size?: string | number
}

export type TIconNames = keyof typeof ICONS

export type User = {
	id?: string
	name?: string
	last_name?: string
	email?: string
	phone?: string
	lang?: string
}

export type TBook = {
	id?: string
	book_id?: string
	sort?: string
	book_name?: string
	in_stock?: string
	image?: string
	price?: string
	book_info?: string
	author_name?: string
	created_at?: string
	isbn?: string
	size?: string
	pages?: string
	print?: string
	categories?: string[]
	trailer?: string
	has_digital_version: boolean
	digital_price: string
	authors: {
		id: string
		name: string
		info: string
		image: string
	}[]
}

export type TAuthor = {
	id: string
	name: string
}

export type TCategories = {
	id: string
	name: string
}

export type TAudiobook = {
	id?: string
	book_id: string
	book_name: string
	book_info: string
	audio_demo: string
	duration: string
	price: string
	image: string
	sort?: string
	created_at?: string
	isbn?: string
	size?: string
	pages?: string
	print?: string
	author_name: string
	authors: {
		id: string
		name: string
		info: string
		image: string
	}[]
	trailer?: string
	categories?: string[]
}
export type TNews = {
	id: string
	image: string
	name: string
	created_at: string
	type: string
	info?: string
}

export type TChannel = {
	id: string
	image: string
	title: string
	description: string
	episodes_count: number
	hours?: number
}

export type TEpisode = {
	id: string
	title: string
	description: string
	image: string
	audio: string
	duration: string
	created_at: string
	episodes_count: string
}

export type TGroupedEpisode = Array<{
	date: string
	data: TEpisode[]
}>

export type TGroupedNotifications = Array<{
	date: string
	data: TNotification[]
}>

export type TNotification = {
	id: string
	title: string
	message: string
	created_at: string
}

export type Section<Data> = {
	section: Data
}

export type TBasicOption = {
	id: number
	label: string
	value: any
}

export type TPagination = {
	page: number
	limit: number
	totalPages?: number
}

export type TProduct = {
	id?: string
	book_id: string
	in_stock?: string
	book_name: string
	image: string
	price: string
	author_name: string
	created_at?: string
	type: valueof<typeof BOOK_TYPES>
	quantity: string
}

export type TCart = {
	products: TProduct[]
	deliveryPrice?: number
	productPrice: number
	totalPrice: number
}

export type TCountry = {
	id: string
	name: string
}

export type TAddress = {
	id: string
	app_user_id: string
	name: string
	surname: string
	company_name: string | null
	country_id: string
	country: TCountry
	street: string
	apartment: string
	city: string
	postal_code: string
	phone_number: string
	email: string
	address_name: string
	is_default: true
}

export type TTerms = {
	id: string
	slug: string
	name_am: string
	name_en: string
	info_am: string
	info_en: string
	image: string
	updated_at: string
	updated_by: string
	show_image: string
	meta_title_am: string
	meta_title_en: string
	meta_description_am: string
	meta_description_en: string
	main: string
}

export type TOrder = {
	id: string
	order_id: string
	created_date: string
	total_price: string
	total_shipping: string
	status: {
		text: string
		color: string
	}
	payment_method_id: string
	name: string
	surname: string
	company_name: string
	country_id: string
	city: string
	street: string
	apartment: string
	postal_code: string
	phone_number: string
	email: string
	items: Array<TBook | TAudiobook>
}

export type TGroupedOrders = Array<{
	date: string
	data: TOrder[]
}>

export type TPaymentMethod = {
	id: string
	name: string
	images: string[]
}

export type TTrackInfo = {
	title?: string
	image?: string
	author?: string
}

export type TBanner = {
	name: string
	url: string
	image: string
}
