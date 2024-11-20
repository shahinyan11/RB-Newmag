import { TAudiobook, TBook } from '@/types'

const getAuthorName = (data?: TBook | TAudiobook) => {
	return data?.author_name || data?.authors?.[0].name || ''
}

export default getAuthorName
