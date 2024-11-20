import React, { FC } from 'react'
import { Text } from 'react-native'

import Button from '@/components/Button'
import styles from './styles'
import SafeAreaContainer from '@/components/containers/SafeAreaContainer'
import { FormikProvider, useFormik } from 'formik'
import { resetPasswordReq } from '@/store/auth/operations'
import { useDispatch } from '@/store/hooks'
import resetFormValidation from '@/validations/resetFormValidation'
import TextField from '@/components/formFields/TextField'
import { useSelector } from 'react-redux'
import { selectLoaders } from '@/store/app/selectors'
import { resetPasswordEndpoint } from '@/store/auth/endpoints'
import { useTranslation } from 'react-i18next'
import { StackScreenProps } from '@react-navigation/stack'
import { PublicScreensParamList } from '@/navigation/types'

type EnterNewPasswordScreenProps = StackScreenProps<PublicScreensParamList, 'enterNewPassword'>

const EnterNewPasswordScreen: FC<EnterNewPasswordScreenProps> = ({ route }) => {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const loaders = useSelector(selectLoaders)
	const isLoading = loaders[resetPasswordEndpoint.endpoint]

	const formik = useFormik({
		enableReinitialize: true,
		validationSchema: resetFormValidation,
		initialValues: {
			password: '',
			confirmPassword: '',
			email: route.params.email,
			code: route.params.code,
		},
		onSubmit: (values, formikHelpers) => {
			dispatch(resetPasswordReq(values))
		},
	})

	return (
		<SafeAreaContainer containerStyle={styles.container}>
			<Text style={styles.title}>{t('auth.enterNewPassword')}</Text>
			<FormikProvider value={formik}>
				<TextField
					name="password"
					animatedLabel={`${t('inputLabels.password')} *`}
					containerStyle={styles.input}
					secureTextEntry
				/>
				<TextField
					name="confirmPassword"
					animatedLabel={`${t('inputLabels.reEnterPassword')} *`}
					containerStyle={styles.input}
					secureTextEntry
				/>
				<Button
					type="default"
					label={t('auth.applyNewPassword')}
					style={styles.button}
					labelStyle={styles.buttonLabel}
					onPress={formik.handleSubmit}
					loading={isLoading}
				/>
			</FormikProvider>
		</SafeAreaContainer>
	)
}

EnterNewPasswordScreen.displayName = 'EnterNewPasswordScreen'
export default EnterNewPasswordScreen
