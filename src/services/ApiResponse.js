import { URL_BACK } from "../utils/Constanst"

const getBody = ( service, header, body) => {
    let bodyReturn = {
        method: service,
        headers: (header) ? { ...header, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' }
    }
    if(body) bodyReturn = {...bodyReturn, body: JSON.stringify(body)}

    return bodyReturn
}

export const apiConnection = async ( url, header, body, service = 'GET') => {
    try {
        const data = await fetch( `${URL_BACK}/${url}`, getBody(service, header, body) )
        return await data.json()
    } catch(err) {
        console.log(err)
    }
    
}