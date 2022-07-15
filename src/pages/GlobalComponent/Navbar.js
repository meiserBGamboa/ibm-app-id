import React, {useContext} from 'react'
import {AuthContext} from '../../auth/AuthContext'
import { 
	Layout, 
	Button, 
	Grid,
    Menu
} from 'antd'
import { routesApp } from '../../utils/Constanst'
import { Link, useNavigate } from 'react-router-dom'
import { types } from '../../utils/GeneralTypes'

const { Header } = Layout
const { useBreakpoint } = Grid
const styleNavbar = {
	buttonPc: {
		display: 'none'
	},
	buttonMobile: {
		background: 'none'
	},
	menubarMobile: {
		padding: '0 20px',
		background: '#3390EF',
	},
	menubarPc: {
		background: '#3390EF',
		padding: '0'
	}
}
const styleTopBar = {
    navbar: {
        display: 'block'
    },
    navbarItem: {
        float: 'right'
    },
    textNavBarItem: {
        background: 'none',
        border: 'none',
        fontSize: '18px',
        color: 'white',
        fontWeight: 'bold'
    }
}

const Navbar = () => {
	const { lg } = useBreakpoint()
    const { userTestIbm, dispatch } = useContext(AuthContext)
    let navigate = useNavigate()
    let newRoutes = routesApp.map(
        (item) => {
            return {
                label: <Link to={item.link} >{item.name}</Link>,
                key: item.link
            }
        }
    )
    const handleLogout = () => {
        dispatch({
            type: types.logout
        })
        navigate('/login')
    }
	
	return(
		<Header style={lg ? styleNavbar.menubarPc : styleNavbar.menubarMobile} >
            <Menu 
                theme="dark" 
                mode={lg ? "horizontal" : "inline"} 
                style={styleTopBar.navbar} 
                items = {
                    [
                        ...newRoutes,
                        {
                            key: "user",
                            style: styleTopBar.navbarItem,
                            label: <Button key={'nameUser'} onClick={handleLogout} style={styleTopBar.textNavBarItem} >{`${userTestIbm.userNames}`}</Button>
                                    
                        }
                    ]
                }
            />
		</Header>
	)
}

export default Navbar