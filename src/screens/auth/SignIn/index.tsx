import React, { useCallback } from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FormikProvider, useFormik } from 'formik'

import loginFormValidation from '@/validations/loginFormValidation'
import type { NavigationProp } from '@/navigation/types'
import SCREENS from '@/navigation/SCREENS'
import TextField from '@/components/formFields/TextField'
import Button from '@/components/Button'
import Header from '@/components/Header'
import Icon from '@/components/Icon'
import { useDispatch, useSelector } from '@/store/hooks'
import { loginEndpoint } from '@/store/auth/endpoints'
import { loginReq } from '@/store/auth/operations'
import { selectLoaders } from '@/store/app/selectors'
import { RH, RW } from '@/theme'
import styles from './styles'
import { useTranslation } from 'react-i18next'

function SignInScreen() {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const { navigate } = useNavigation<NavigationProp>()
	const loaders = useSelector(selectLoaders)
	const isLoading = loaders[loginEndpoint.endpoint]

	const formik = useFormik({
		enableReinitialize: true,
		validationSchema: loginFormValidation,
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: (values, formikHelpers) => {
			dispatch(loginReq(values))
		},
	})

	const navigateToSignUp = useCallback(() => navigate(SCREENS.SIGN_UP), [])

	const navigateToForgotPassword = useCallback(() => navigate(SCREENS.FORGOT_PASSWORD), [])

	return (
		<View style={styles.container}>
			<Header title="Sign in" />
			<Icon name="brand" height={RH(50)} width={RW(231)} style={{ marginVertical: RH(50) }} />
			<Text style={styles.signInText}>Sign in</Text>
			<FormikProvider value={formik}>
				<TextField
					name="email"
					animatedLabel={t('auth.yourEmail')}
					containerStyle={styles.input}
				/>
				<TextField name="password" animatedLabel={t('auth.password')} secureTextEntry />
				<Button
					type="default"
					label={t('auth.signIn')}
					style={styles.signInButton}
					onPress={formik.handleSubmit}
					loading={isLoading}
				/>
			</FormikProvider>
			<Text style={styles.forgotText} onPress={navigateToForgotPassword}>
				{t('auth.forgotQuestion')}
			</Text>
			<View style={styles.line} />
			<Text style={styles.dontHaveAccountText}>{t('auth.dontHaveAccount')}</Text>
			<Button
				type="outline"
				label="SIGN UP"
				style={styles.signUpButton}
				onPress={navigateToSignUp}
			/>
		</View>
	)
}

SignInScreen.defaultName = 'handleSubmit'
export default SignInScreen
