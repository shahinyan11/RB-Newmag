type EndpointMakerParams = {
	method: 'GET' | 'PUT' | 'POST' | 'PATCH' | 'DELETE'
	url: string
}

function endpointMaker({ method, url }: EndpointMakerParams) {
	return {
		endpoint: `${method}_${url}`,
		url: url,
	}
}

export default endpointMaker
