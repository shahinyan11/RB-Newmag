import * as yup from 'yup'
import { t } from '@/i18n'
import REGEXP from '@/constants/REGEXP'

const registerFormValidation = yup.object().shape({
	first_name: yup.string().required(t('validations.notCompletedAllFields')),
	last_name: yup.string().required(t('validations.notCompletedAllFields')),
	email: yup.string().email().required(t('validations.notCompletedAllFields')),
	phone: yup
		.string()
		.matches(REGEXP.PHONE_NUMBER)
		.required(t('validations.notCompletedAllFields')),
	password: yup
		.string()
		// .min(8)
		// .matches(/[0-9]/, 'Password requires a number')
		// .matches(/[A-Z]/, 'Password requires an uppercase letter')
		.required(t('validations.notCompletedAllFields')),
	confirm_password: yup
		.string()
		.oneOf([yup.ref('password')], t('validations.passwordNotMatch'))
		.required(t('validations.notCompletedAllFields')),
})

export default registerFormValidation
