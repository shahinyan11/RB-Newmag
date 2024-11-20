import Pdf from 'react-native-pdf'
import ScreenWrapper from '@/components/ScreenWrapper'
import styles from '@/styles'
import Header from '@/components/Header'
import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { PrivateScreensParamList } from '@/navigation/types'
import { API_URL } from '@/constants/CONST'
import { useSelector } from '@/store/hooks'
import { selectAuthToken } from '@/store/auth/selectors'

type DigitalBookProps = StackScreenProps<PrivateScreensParamList, 'digitalBook'>

const DigitalBook: FC<DigitalBookProps> = ({ route }) => {
	const token = useSelector(selectAuthToken)

	return (
		<ScreenWrapper HeaderComponent={<Header title={route.params.title} />}>
			<Pdf
				source={{ uri: `${API_URL}/digitalBooks/100/url/${token}` }}
				trustAllCerts={false}
				style={styles.fl_1}
				onLoadComplete={(numberOfPages, filePath) => {
					console.log(`Number of pages: ${numberOfPages}`)
				}}
				onPageChanged={(page, numberOfPages) => {
					console.log(`Current page: ${page}`)
				}}
				onError={error => {
					console.log(error)
				}}
				onPressLink={uri => {
					console.log(`Link pressed: ${uri}`)
				}}
			/>
		</ScreenWrapper>
	)
}

export default DigitalBook
