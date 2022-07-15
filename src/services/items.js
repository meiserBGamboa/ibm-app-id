import { apiConnection } from "./ApiResponse"

export const getAllItems = ( apiKey ) => {
    const response = apiConnection(
        'items',
        { Authorization: apiKey },
        null
    )
    return response
}

export const createItem = (apiKey, data) => {
    const response = apiConnection( 
		'items', 
		{Authorization: apiKey}, 
		data,
		'POST' 
	)
	return response
}

export const deleteItem = (apiKey, data) => {
    const response = apiConnection( 
		'item', 
		{Authorization: apiKey}, 
		data,
		'PUT' 
	)
	return response
}

export const editItem = (apiKey, data) => {
    const response = apiConnection( 
		'item', 
		{Authorization: apiKey}, 
		data,
		'POST' 
	)
	return response
}