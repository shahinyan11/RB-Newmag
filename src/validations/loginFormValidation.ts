import * as yup from 'yup'

const loginFormValidation = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required(),
})

export default loginFormValidation
