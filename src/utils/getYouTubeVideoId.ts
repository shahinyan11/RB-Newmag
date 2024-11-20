const getYouTubeVideoId = (url: string) => {
	const match = url?.match(/[?&]v=([^&]+)/)
	return match?.[1] ?? ''
}

export default getYouTubeVideoId
