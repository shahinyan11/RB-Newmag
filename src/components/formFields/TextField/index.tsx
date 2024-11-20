import React from 'react'
import { useField } from 'formik'
import TextInput from '@/components/TextInput'
import { ITextInputProps } from '@/components/TextInput/types'

type TextFieldProps = ITextInputProps & {
	name: string
}

const TextField = ({ name, ...props }: TextFieldProps) => {
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
		<TextInput
			{...props}
			value={value}
			onChangeText={helper.setValue}
			onFocus={handleFocus}
			onBlur={handleBlur}
			error={touched ? error : undefined}
		/>
	)
}

export default TextField
