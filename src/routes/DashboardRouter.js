import { Layout } from "antd"
import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../pages/GlobalComponent/Navbar"

const stylePage = {
    generalLayout: {
        minHeight: '100%'
    }
}

const DashboardRoutes = () => {
    return(
        <Layout style={stylePage.generalLayout} >
            <Layout >
                <Navbar />
                <Outlet />
            </Layout>
        </Layout>
    )
}

export default DashboardRoutes