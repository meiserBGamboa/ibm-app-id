import React, { useReducer, useEffect } from 'react'
import AppRouter from './routes/AppRouter'
import { AuthContext } from './auth/AuthContext'
import { AuthReducer } from './auth/AuthReducer'
import 'antd/dist/antd.min.css'

const init = () => {
    return JSON.parse(localStorage.getItem('userTestIbm')) || { logged: false }
}

const App = () =>{
    const [userTestIbm, dispatch] = useReducer(AuthReducer, {}, init)

    useEffect(() => {
        localStorage.setItem( 'userTestIbm', JSON.stringify(userTestIbm) );
    }, [userTestIbm]) 

    return(
        <AuthContext.Provider value ={{ userTestIbm, dispatch}}>
            <AppRouter />
        </AuthContext.Provider>
    )
}

export default App