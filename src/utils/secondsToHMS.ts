function secondsToHMS(seconds: number): string {
	seconds = Math.round(seconds)
	
	const hours = Math.floor(seconds / 3600)
	const minutes = Math.floor((seconds % 3600) / 60)
	const secs = seconds % 60

	const formattedHours = String(hours).padStart(2, '0')
	const formattedMinutes = String(minutes).padStart(2, '0')
	const formattedSeconds = String(secs).padStart(2, '0')

	return `${hours ? `${formattedHours}:` : ''}${minutes ? `${formattedMinutes}:` : ''}${formattedSeconds}`
}

export default secondsToHMS
