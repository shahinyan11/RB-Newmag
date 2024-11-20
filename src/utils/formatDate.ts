import { DATE_FORMAT } from '@/constants/CONST'
import moment from 'moment/moment'

const formatDate = (date: number, format = DATE_FORMAT) => {
	return moment(date * 1000).format(format)
}

export default formatDate
