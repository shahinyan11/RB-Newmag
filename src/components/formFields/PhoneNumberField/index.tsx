import React from 'react'
import { useField } from 'formik'
import PhoneNumberInput, { PhoneNumberInputProps } from '@/components/inputs/PhoneNumberInput'

type PhoneNumberFieldProps = PhoneNumberInputProps & {
	name: string
}

const PhoneNumberField = ({ name, ...props }: PhoneNumberFieldProps) => {
	const [field, meta, helper] = useField(name)
	const { value, touched, error } = meta

	const handleFocus = () => {
		helper.setTouched(false)
	}

	const handleBlur = () => {
		helper.setTouched(true)
		field.onBlur(name)
	}

	return (
		<PhoneNumberInput
			{...props}
			value={value}
			onChangeText={helper.setValue}
			onFocus={handleFocus}
			onBlur={handleBlur}
			error={touched ? error : undefined}
		/>
	)
}

PhoneNumberField.displayName = 'PhoneNumberField'
export default PhoneNumberField
