import React, { FC } from 'react'
import { Text } from 'react-native'
import Button from '@/components/Button'
import Header from '@/components/Header'
import styles from './styles'
import { FormikProvider, useFormik } from 'formik'
import TextField from '@/components/formFields/TextField'
import ScreenWrapper from '@/components/ScreenWrapper'
import { useDispatch } from '@/store/hooks'
import { useTranslation } from 'react-i18next'
import { verifyCodeReq } from '@/store/auth/operations'
import verifyCodeFormValidation from '@/validations/verifyCodeFormValidation'
import { StackScreenProps } from '@react-navigation/stack'
import { PublicScreensParamList } from '@/navigation/types'

type VerifyCodeScreenProps = StackScreenProps<PublicScreensParamList, 'verifyCode'>

const VerifyCodeScreen: FC<VerifyCodeScreenProps> = ({ route }) => {
	const { t } = useTranslation()
	const dispatch = useDispatch()

	const formik = useFormik({
		enableReinitialize: true,
		validationSchema: verifyCodeFormValidation,
		initialValues: {
			code: '',
			email: route.params?.email,
		},
		onSubmit: (values, formikHelpers) => {
			dispatch(verifyCodeReq(values))
		},
	})

	return (
		<ScreenWrapper
			HeaderComponent={<Header title={t('auth.verifyCode')} />}
			contentContainerStyle={styles.container}
		>
			<Text style={styles.title}>{t('auth.verifyCode')}</Text>
			<FormikProvider value={formik}>
				<TextField
					name="code"
					animatedLabel={`${t('inputLabels.code')} *`}
					containerStyle={styles.input}
					keyboardType="numeric"
				/>
				<Button
					type="default"
					label={t('button.verify')}
					style={styles.button}
					labelStyle={styles.buttonLabel}
					onPress={formik.handleSubmit}
				/>
			</FormikProvider>
		</ScreenWrapper>
	)
}

VerifyCodeScreen.displayName = 'VerifyCodeScreen'
export default VerifyCodeScreen
