import * as yup from 'yup'
import REGEXP from '@/constants/REGEXP'

const userInfoFormValidation = yup.object().shape({
	name: yup.string(),
	last_name: yup.string(),
	email: yup.string().email(),
	phone: yup.string().matches(REGEXP.PHONE_NUMBER),
})

export default userInfoFormValidation
