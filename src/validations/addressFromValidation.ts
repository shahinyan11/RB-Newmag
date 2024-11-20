import * as yup from 'yup'
import REGEXP from '@/constants/REGEXP'

const addressFromValidation = yup.object().shape({
	address_name: yup.string().required(),
	name: yup.string().required(),
	surname: yup.string().required(),
	company_name: yup.string(),
	country: yup.object().shape({
		id: yup.string().required(),
		name: yup.string().required(),
	}),
	street: yup.string().required(),
	apartment: yup.string().required(),
	city: yup.string().required(),
	postal_code: yup.string().required(),
	phone_number: yup.string().matches(REGEXP.PHONE_NUMBER).required(),
	email: yup.string().email().required(),
})

export default addressFromValidation
