import React from 'react'
import { Text } from 'react-native'
import Button from '@/components/Button'
import Header from '@/components/Header'
import styles from './styles'
import { FormikProvider, useFormik } from 'formik'
import TextField from '@/components/formFields/TextField'
import ScreenWrapper from '@/components/ScreenWrapper'
import forgotFormValidation from '@/validations/forgotFormValidation'
import { useDispatch } from '@/store/hooks'
import { useTranslation } from 'react-i18next'
import { forgotPasswordReq } from '@/store/auth/operations'

function ForgotPasswordScreen() {
	const { t } = useTranslation()
	const dispatch = useDispatch()

	const formik = useFormik({
		enableReinitialize: true,
		validationSchema: forgotFormValidation,
		initialValues: {
			email: '',
		},
		onSubmit: (values, formikHelpers) => {
			dispatch(forgotPasswordReq(values.email))
		},
	})

	return (
		<ScreenWrapper
			HeaderComponent={<Header title={t('auth.forgotPassword')} />}
			contentContainerStyle={styles.container}
		>
			<Text style={styles.title}>{t('auth.forgotPassword')}</Text>
			<FormikProvider value={formik}>
				<TextField
					name="email"
					animatedLabel={`${t('inputLabels.email')} *`}
					containerStyle={styles.input}
				/>
				<Button
					type="default"
					label={t('auth.sendMeLink')}
					style={styles.button}
					labelStyle={styles.buttonLabel}
					onPress={formik.handleSubmit}
				/>
			</FormikProvider>
		</ScreenWrapper>
	)
}

ForgotPasswordScreen.displayName = 'ForgotPasswordScreen'
export default ForgotPasswordScreen
