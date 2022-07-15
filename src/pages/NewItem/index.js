import { Button, Col, Form, Input, message, Row, Typography } from "antd"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/AuthContext"
import { createItem } from "../../services/items"

const { Title } = Typography

const stylePage = {
    spaceContainer: {
        height: '100%',
        paddingTop: '30px',
        paddingBottom: '30px'
    },

}

const NewItem = () => {
    const {userTestIbm} = useContext(AuthContext)
    let navigate = useNavigate()
    const sendPublic = async (values) => {
        const respond = await createItem(userTestIbm.token, values)
        console.log(respond)
        if(!respond) message.error('Error: not response.')
        if(!respond.id) {
            message.error('Error of endpoint create items.')
        } else {
            message.success('Articulo creado correctamente.')
            navigate('/')
        }
    }

    return(
        <div >
            <Row 
                gutter={16} 
                align='center'
                style={stylePage.spaceContainer} 
            >
                <Col span={22} >
                    <Title >Nuevo</Title>
                    <p >Añade un nuevo Articulo.</p>
                    <Form 
                        layout='vertical' 
                        onFinish={sendPublic}
                    >
                        <Form.Item 
                            name="name" 
                            label={`Nombre de Articulo`}
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item 
                            name="descriptions" 
                            label={`Descripción de Articulo`}
                            rules={[{ required: true, message: 'Please input description!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item 
                            name="url" 
                            label={`URL de foto`}
                            rules={[{ required: true, message: 'Please input URL!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item >
                            <Button 
                                type='primary'
                                size='large'
                                htmlType="submit"
                            >
                                Agregar
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default NewItem