import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import * as route from '../utils/Routes'


export const PrivateRouter = ({
    isAuthenticated,
    component
}) => {
    if(!isAuthenticated) return <Navigate replace to={route.login} />
    
    return component ? component : <Outlet />
}