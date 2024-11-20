import React, { useCallback } from 'react'
import { Text, View } from 'react-native'
import Toast from 'react-native-toast-message'
import type { ToastConfig } from 'react-native-toast-message/lib/src/types'

import styles from './styles'
import Icon from '@/components/Icon'

const ToastMessage = () => {
	const hide = useCallback(() => Toast.hide(), [])

	const toastConfig: ToastConfig = {
		success: ({ text1, props }) => (
			<View style={styles.container}>
				<View style={[styles.content, styles.success]}>
					<Text style={styles.text}>{text1}</Text>
					<Icon name="close" onPress={hide} />
				</View>
			</View>
		),

		error: ({ text1, props }) => (
			<View style={styles.container}>
				<View style={[styles.content, styles.error]}>
					<Text style={styles.text}>{text1}</Text>
					<Icon name="close" onPress={hide} />
				</View>
			</View>
		),
		info: ({ text1, props }) => (
			<View style={styles.container}>
				<View style={[styles.content, styles.info]}>
					<Text style={styles.text}>{text1}</Text>
					<Icon name="close" onPress={hide} />
				</View>
			</View>
		),
	}

	return <Toast config={toastConfig} topOffset={50} />
}

export default ToastMessage
