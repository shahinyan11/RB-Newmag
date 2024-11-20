import React, { useCallback, useEffect } from 'react'
import { BackHandler } from 'react-native'

import { bottomSheetSelector } from '@/store/modal/selectors'
import { useDispatch, useSelector } from '@/store/hooks'
import { closeBottomSheet } from '@/store/modal'
import BOTTOM_SHEETS from './BOTTOM_SHEETS'

function BottomSheet() {
	const dispatch = useDispatch()
	const { type, data } = useSelector(bottomSheetSelector)

	const onBackPress = useCallback(() => {
		dispatch(closeBottomSheet())

		return true
	}, [type, data])

	const handleClose = () => dispatch(closeBottomSheet())

	useEffect(() => {
		BackHandler.addEventListener('hardwareBackPress', onBackPress)

		return () => {
			BackHandler.removeEventListener('hardwareBackPress', onBackPress)
		}
	}, [onBackPress])

	if (!type) {
		return null
	}

	const Component = BOTTOM_SHEETS[type]
	/* @ts-ignore */
	return <Component {...data} onClose={handleClose} />
}

BottomSheet.displayName = 'BottomSheet'
export default BottomSheet
