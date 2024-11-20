import WebView from 'react-native-webview'
import styles from '@/styles'
import ScreenWrapper from '@/components/ScreenWrapper'
import { useSelector } from '@/store/hooks'
import { selectAuthToken } from '@/store/auth/selectors'
import { selectSelectedPaymentMethod } from '@/store/app/selectors'

const DigitalBook = () => {
	const token = useSelector(selectAuthToken)
	const selectedPaymentMethod = useSelector(selectSelectedPaymentMethod)

	return (
		<ScreenWrapper>
			<WebView
				style={[styles.fl_1, styles.bgc_gray100]}
				source={{
					html: `
						<form id="paymentForm" action="https://newmag.am/api/generate-order" method="POST">
							<input type="hidden" name="payment_method_id" value="${selectedPaymentMethod}}">
							<input type="hidden" name="auth_token" value="${token}">
						</form>
					`,
				}}
				injectedJavaScript={`
					document.getElementById('paymentForm').submit();
					true;
  				`}
			/>
		</ScreenWrapper>
	)
}

export default DigitalBook
