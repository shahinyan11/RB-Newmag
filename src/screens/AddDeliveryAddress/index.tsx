import { FC, useEffect } from 'react'

import { useDispatch } from '@/store/hooks'
import { getDeliveryCountriesReq } from '@/store/app/operations'
import AddressForm from '@/components/forms/AddressForm'
import ScreenWrapper from '@/components/ScreenWrapper'
import LocalHeader from './LocalHeader'
import { StackScreenProps } from '@react-navigation/stack'
import { PrivateScreensParamList } from '@/navigation/types'

const AddDeliveryAddressScreen: FC<
	StackScreenProps<PrivateScreensParamList, 'addDeliveryAddresses'>
> = ({ route }) => {
	const address = route.params?.address
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getDeliveryCountriesReq())
	}, [])

	return (
		<ScreenWrapper HeaderComponent={<LocalHeader addressId={address?.id} />}>
			<AddressForm address={route.params?.address} />
		</ScreenWrapper>
	)
}

AddDeliveryAddressScreen.displayName = 'AddDeliveryAddressScreen'
export default AddDeliveryAddressScreen
