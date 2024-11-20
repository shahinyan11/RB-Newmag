export type Response<TData> = {
	data: {
		data: TData
		message?: string
		totalPages?: number
	}
}

export type RegisterResponse = {
	token: string
}
export type LoginResponse = {
	token: string
}
