import * as yup from 'yup'

const verifyCodeFormValidation = yup.object().shape({
	email: yup.string().required(),
})

export default verifyCodeFormValidation
