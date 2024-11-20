import React, { FC, useCallback, useState } from 'react'
import Text from '@/components/Text'
import { FormikProvider, useFormik } from 'formik'
import TextField from '@/components/formFields/TextField'
import styles from './styles'
import { ScrollView, View } from 'react-native'
import SelectCountry from '@/components/BottomSheet/SelectCountry'
import SelectField from '@/components/formFields/SelectField'
import { TAddress, TCountry } from '@/types'
import addressFromValidation from '@/validations/addressFromValidation'
import { useDispatch } from '@/store/hooks'
import { addDeliveryAddressReq, updateDeliveryAddressReq } from '@/store/user/operations'
import Button from '@/components/Button'
import { useSelector } from 'react-redux'
import { addDeliveryAddressEndpoint, updateDeliveryAddressEndpoint } from '@/store/user/endpoints'
import { selectIsLoading } from '@/store/app/selectors'
import { useTranslation } from 'react-i18next'

type AddressFormParams = {
	address?: TAddress
}

const AddressForm: FC<AddressFormParams> = ({ address }) => {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const [isOpen, setIsOpen] = useState(false)
	const isAdding = useSelector(selectIsLoading(addDeliveryAddressEndpoint.endpoint))
	const isUpdating = useSelector(selectIsLoading(updateDeliveryAddressEndpoint.endpoint))

	const formik = useFormik({
		enableReinitialize: true,
		validateOnMount: true,
		validationSchema: addressFromValidation,
		initialValues: {
			address_name: address?.address_name ?? '',
			name: address?.name ?? '',
			surname: address?.surname ?? '',
			company_name: address?.company_name ?? '',
			country: address?.country ?? undefined,
			street: address?.street ?? '',
			apartment: address?.apartment ?? '',
			city: address?.city ?? '',
			postal_code: address?.postal_code ?? '',
			phone_number: address?.phone_number ?? '',
			email: address?.email ?? '',
		},
		onSubmit: (values, formikHelpers) => {
			if (address) {
				dispatch(
					updateDeliveryAddressReq({
						...values,
						address_id: address.id,
						country_id: values.country?.id,
					}),
				)
				return
			}

			dispatch(
				addDeliveryAddressReq({
					...values,
					country_id: values.country?.id,
				}),
			)
		},
	})

	const handleCountrySelect = useCallback(
		(country: TCountry) => {
			formik.setFieldValue('country', country)
		},
		[formik],
	)

	const handleClose = useCallback(() => {
		setIsOpen(false)
		formik.setFieldTouched('country', true)
	}, [formik])

	return (
		<FormikProvider value={formik}>
			<ScrollView
				style={styles.fl_1}
				contentContainerStyle={[styles.bgc_gray100, styles.pv_20]}
			>
				<View style={styles.container}>
					<Text style={styles.ta_c}>
						{t(address ? 'common.editDeliveryAddress' : 'common.addDeliveryAddress')}
					</Text>
					<TextField
						name="address_name"
						animatedLabel={`${t('inputLabels.addressName')} *`}
					/>
				</View>
				<View style={[styles.p_10, styles.bgc_white, styles.gap_10]}>
					<TextField name="name" animatedLabel={`${t('inputLabels.name')} *`} />
					<TextField name="surname" animatedLabel={`${t('inputLabels.surname')} *`} />
					<TextField
						name="company_name"
						animatedLabel={`${t('inputLabels.companyNameOptional')}`}
					/>

					<SelectField
						name="country"
						placeholder={`${t('inputLabels.country')} *`}
						onPress={() => setIsOpen(true)}
					/>
					<TextField name="street" animatedLabel={`${t('inputLabels.street')} *`} />
					<TextField name="apartment" animatedLabel={`${t('inputLabels.apartment')} *`} />
					<TextField
						name="city"
						animatedLabel={`${t('inputLabels.cityAdministrativeDistrict')} *`}
					/>
					<TextField
						name="postal_code"
						animatedLabel={`${t('inputLabels.postalCode')} *`}
					/>
					<TextField
						name="phone_number"
						animatedLabel={`${t('inputLabels.phoneNumber')} *`}
					/>
					<TextField name="email" animatedLabel={`${t('inputLabels.email')} *`} />
					<Button
						label={t('button.save')}
						style={styles.mt_10}
						onPress={formik.handleSubmit}
						disabled={!formik.isValid}
						loading={isAdding || isUpdating}
					/>
				</View>
			</ScrollView>

			{isOpen && (
				<SelectCountry
					onClose={handleClose}
					onSelect={handleCountrySelect}
					defaultSelected={formik.values.country}
				/>
			)}
		</FormikProvider>
	)
}

AddressForm.displayName = 'AddressForm'
export default AddressForm
