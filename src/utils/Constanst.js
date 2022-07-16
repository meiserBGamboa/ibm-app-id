export const configIbm = {
    clientId: process.env.REACT_APP_CLIENT_ID,
    discoveryEndpoint: process.env.REACT_APP_DISCOVERY_ENDPOINT
}

export const URL_BACK = process.env.REACT_APP_URL_BACK

export const routesApp = [
    {
        link: '/',
		name: 'Catalogo',
    },
    {
        link: '/new',
		name: 'Nuevo',
    },
    {
        link: '/min-stock',
		name: 'Sin Stock',
    },
]