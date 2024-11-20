const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
	transformer: {
		babelTransformerPath: require.resolve('react-native-svg-transformer'),
	},
	resolver: {
		sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'svg'],
		assetExts: [
			'bmp',
			'gif',
			'jpg',
			'jpeg',
			'png',
			'psd',
			'webp',
			'm4v',
			'mov',
			'mp4',
			'mpeg',
			'mpg',
			'webm',
			'aac',
			'aiff',
			'caf',
			'm4a',
			'mp3',
			'wav',
			'html',
			'pdf',
			'yaml',
			'yml',
			'otf',
			'ttf',
			'zip',
		],
	},
}

module.exports = mergeConfig(getDefaultConfig(__dirname), config)
