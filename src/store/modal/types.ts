import BOTTOM_SHEETS from '@/components/BottomSheet/BOTTOM_SHEETS'

export type InitialModalState = {
	modal: {
		type?: null
		data: {}
	}
	bottomSheet: BottomSheet
}

export type BottomSheet = {
	type?: BottomSheetType
	data?: { [key: string]: any }
}

export type BottomSheetType = keyof typeof BOTTOM_SHEETS
