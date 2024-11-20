import * as yup from 'yup'
import { t } from '@/i18n'

const resetFormValidation = yup.object().shape({
	password: yup
		.string()
		.min(6)
		// .matches(/[0-9]/, 'Password requires a number')
		// .matches(/[A-Z]/, 'Password requires an uppercase letter')
		.required(t('validations.notCompletedAllFields')),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password')], t('validations.passwordNotMatch'))
		.required('Confirm password is required'),
})

export default resetFormValidation
