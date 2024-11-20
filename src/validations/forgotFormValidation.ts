import * as yup from 'yup'

const forgotFormValidation = yup.object().shape({
	email: yup.string().email().required(),
})

export default forgotFormValidation
