import React, { useContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { AuthContext } from '../auth/AuthContext'
import { PrivateRouter } from './PrivateRouter'
import DashboardRoutes from './DashboardRouter'
import * as route from '../utils/Routes'
import Login from "../pages/Login"
import DashboardWrapper from "../pages/DashboardWrapper"
import Page404 from "../pages/Page404"
import NewItem from "../pages/NewItem"
import EditItem from "../pages/EditItem"
import SinStock from "../pages/SinStock"

const AppRouter = () => {
    const { userTestIbm } = useContext(AuthContext);

    return(
        <BrowserRouter >
            <Routes >
                <Route exact path={route.login} element={<Login/>} />
                <Route exact path='/' element={<PrivateRouter component={<DashboardRoutes />} isAuthenticated={userTestIbm.logged} />} >
                    <Route exact path={route.dashboard} element={<DashboardWrapper />} />
                    <Route exact path={route.stock} element={<SinStock />} />
                    <Route exact path={route.newItem} element={<NewItem />} />
                    <Route exact path={`${route.editItem}`} element={<EditItem />} />
                    <Route path='*' element={<Page404 /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
  
export default AppRouter