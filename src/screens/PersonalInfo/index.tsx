import React from 'react'
import { ScrollView, Text } from 'react-native'
import { FormikProvider, useFormik } from 'formik'
import { useTranslation } from 'react-i18next'

import TextField from '@/components/formFields/TextField'
import Button from '@/components/Button'
import Header from '@/components/Header'
import { useDispatch, useSelector } from '@/store/hooks'
import { selectIsLoading } from '@/store/app/selectors'
import styles from './styles'
import ScreenWrapper from '@/components/ScreenWrapper'
import userInfoFormValidation from '@/validations/userInfoFormValidation'
import { updateUserInfoReq } from '@/store/user/operations'
import { selectUser } from '@/store/user/selectors'
import { updateUserInfoEndpoint } from '@/store/user/endpoints'

function PersonalInfoScreen() {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const user = useSelector(selectUser)
	const isLoading = useSelector(selectIsLoading(updateUserInfoEndpoint.endpoint))

	const formik = useFormik({
		enableReinitialize: true,
		validationSchema: userInfoFormValidation,
		initialValues: {
			name: user.name ?? '',
			last_name: user.last_name ?? '',
			email: user.email ?? '',
			phone: user.phone ?? '',
		},
		onSubmit: (values, formikHelpers) => {
			dispatch(updateUserInfoReq(values))
		},
	})

	return (
		<ScreenWrapper HeaderComponent={<Header title={t('common.myPersonalInformation')} />}>
			<FormikProvider value={formik}>
				<ScrollView
					style={styles.fl_1}
					contentContainerStyle={styles.container}
					showsVerticalScrollIndicator={false}
				>
					<Text style={styles.title}>{t('common.myPersonalInformation')}</Text>
					<TextField
						name="name"
						animatedLabel={`${t('inputLabels.name')}`}
						containerStyle={styles.input}
					/>
					<TextField
						name="last_name"
						animatedLabel={`${t('inputLabels.surname')}`}
						containerStyle={styles.input}
					/>
					<TextField
						name="email"
						animatedLabel={`${t('inputLabels.email')}`}
						containerStyle={styles.input}
					/>
					<TextField
						name="phone"
						animatedLabel={`${t('inputLabels.phoneNumber')}`}
						containerStyle={styles.input}
						keyboardType="numeric"
					/>
					<Button
						type="default"
						label={t('button.save')}
						style={styles.button}
						onPress={formik.handleSubmit}
						loading={isLoading}
					/>
				</ScrollView>
			</FormikProvider>
		</ScreenWrapper>
	)
}

export default PersonalInfoScreen
