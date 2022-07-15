import { AuthContext } from "../../auth/AuthContext"
import notLogin from '../../assets/images/not-login.jpg'
import { Button, Col, Form, Row } from "antd"
import React, { useContext } from "react"
import * as route from '../../utils/Routes'
import { types } from "../../utils/GeneralTypes"
import { useNavigate } from "react-router-dom"
import AppID from "ibmcloud-appid-js"
import { configIbm } from "../../utils/Constanst"

//const appID = new AppID()

const stylePage = {
    spaceContainer: {
        height: '100%',
        margin: 0,
    },
    image: {
        width: '70%'
    },
    colForm: {
        textAlign: 'center',
        padding: '20px',
        background: 'rgba(0,0,0,.4)'
    },
    divForm: {
        textAlign: 'center'
    },
    formItem: {
        justifyContent: 'center'
    }

}

const Login = () => {
    const { dispatch } = useContext(AuthContext)
    let navigate = useNavigate()
    const onFinish = async () => {
        console.log(configIbm)
        const appID = new AppID()
        await appID.init(configIbm)
        const tokens = await appID.signin()
        let decodeIDToken = tokens.idTokenPayload
        dispatch({
            type: types.login,
            payload: {
              userNames: decodeIDToken.name,
              token: tokens.accessToken
            }
        })
        navigate(route.dashboard)
    }

    return(
        <div style={stylePage.spaceContainer} >
            <Row 
                gutter={16} 
                justify="center" 
                align="middle" 
                style={stylePage.spaceContainer} 
            >
                <Col 
                    xs={22}
                    sm={22}
                    md={22}
                    lg={14}
                    xl={14}
                >
                    <img src={notLogin} alt='singers' style={stylePage.image} />
                </Col>
                <Col 
                    xs={22}
                    sm={22}
                    md={22}
                    lg={8}
                    xl={8}
                    style={stylePage.colForm}
                >
                    <div style={stylePage.colForm}>
                        <Form 
                            labelCol={{ span: 1, }}
                            wrapperCol={{ span: 20, }}
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item 
                                style={stylePage.formItem}
                            >
                                <Button 
                                    type='primary'
                                    size='large'
                                    shape='round'
                                    htmlType='submit'
                                >
                                    Log In
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Login