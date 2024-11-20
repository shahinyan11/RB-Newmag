import React, { useEffect } from 'react'
import { ScrollView, Text } from 'react-native'
import Toast from 'react-native-toast-message'
import { FormikProvider, useFormik } from 'formik'
import { Trans, useTranslation } from 'react-i18next'

import TextField from '@/components/formFields/TextField'
import Button from '@/components/Button'
import Header from '@/components/Header'
import { registerEndpoint } from '@/store/auth/endpoints'
import { registerReq } from '@/store/auth/operations'
import { useDispatch, useSelector } from '@/store/hooks'
import { selectLoaders } from '@/store/app/selectors'
import styles from './styles'
import registerFormValidation from '@/validations/registerFormValidation'
import ScreenWrapper from '@/components/ScreenWrapper'

function SignUpScreen() {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const loaders = useSelector(selectLoaders)
	const isLoading = loaders[registerEndpoint.endpoint]

	const formik = useFormik({
		enableReinitialize: true,
		validateOnBlur: false,
		validateOnChange: false,
		validationSchema: registerFormValidation,
		initialValues: {
			first_name: '',
			last_name: '',
			email: '',
			phone: '',
			password: '',
			confirm_password: '',
		},
		onSubmit: (values, formikHelpers) => {
			dispatch(registerReq(values))
		},
	})

	useEffect(() => {
		if (!formik.isValid && !formik.isSubmitting) {
			Toast.show({
				type: 'error',
				text1: Object.values(formik.errors)[0],
			})
		}
	}, [formik.isValid, formik.isSubmitting])

	return (
		<ScreenWrapper HeaderComponent={<Header title={t('auth.signUp')} />}>
			<ScrollView
				style={styles.fl_1}
				contentContainerStyle={styles.container}
				showsVerticalScrollIndicator={false}
			>
				<Text style={styles.title}>{t('auth.signUp')}</Text>
				<FormikProvider value={formik}>
					<TextField
						name="first_name"
						animatedLabel={`${t('inputLabels.name')} *`}
						containerStyle={styles.input}
					/>
					<TextField
						name="last_name"
						animatedLabel={`${t('inputLabels.surname')} *`}
						containerStyle={styles.input}
					/>
					<TextField
						name="email"
						animatedLabel={`${t('inputLabels.email')} *`}
						containerStyle={styles.input}
					/>
					<TextField
						name="phone"
						animatedLabel={`${t('inputLabels.phoneNumber')} *`}
						containerStyle={styles.input}
						keyboardType="numeric"
					/>
					<TextField
						name="password"
						animatedLabel={`${t('inputLabels.password')} *`}
						containerStyle={styles.input}
						secureTextEntry
					/>
					<TextField
						name="confirm_password"
						animatedLabel={`${t('inputLabels.reEnterPassword')} *`}
						containerStyle={styles.input}
						secureTextEntry
					/>
					<Button
						type="default"
						label={t('auth.signUp')}
						style={styles.button}
						onPress={formik.handleSubmit}
						loading={isLoading}
					/>
				</FormikProvider>
				<Text style={styles.readAndAgreeText}>
					<Trans
						i18nKey={'auth.agreement'}
						components={{ linkTag: <Text style={styles.linkText} /> }}
					/>
				</Text>
			</ScrollView>
		</ScreenWrapper>
	)
}

export default SignUpScreen
