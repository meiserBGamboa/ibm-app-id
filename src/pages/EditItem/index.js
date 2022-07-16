import { Button, Col, Form, Input, InputNumber, message, Row, Typography } from "antd"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/AuthContext"
import { editItem } from "../../services/items"
import GeneralSpin from "../GlobalComponent/GeneralSpin"

const { Title } = Typography

const stylePage = {
    spaceContainer: {
        height: '100%',
        paddingTop: '30px',
        paddingBottom: '30px'
    },

}

const EditItem = () => {
    const {userTestIbm} = useContext(AuthContext)
    const [dataItem, setDataItem] = useState({})
    const [loading, setLoading] = useState(false)
    let navigate = useNavigate()
    useEffect(()=> {
        const getArticle = async () => {
            const itemString = await localStorage.getItem('articleEdit')
            const itemObject = JSON.parse(itemString)
            console.log('asda', itemObject)
            await setDataItem(itemObject)
            await setLoading(true)
        }

        getArticle()
    }, [])

    const sendPublic = async (values) => {
        console.log(values)
        const doc = {
            _id: values.id,
            _rev: values.rev,
            descriptions: values.descriptions,
            name: values.name,
            url: values.url
        }
        const respond = await editItem(userTestIbm.token, {doc})
        console.log(respond)
        if(!respond) message.error('Error: not response.')
        if(!respond.id) {
            message.error('Error of endpoint edit items.')
        } else {
            message.success('Se actualizo articulo correctamente.')
            navigate('/')
        }
    }

    return(
        <div >
            {loading ?
                <Row 
                    gutter={16} 
                    align='center'
                    style={stylePage.spaceContainer} 
                >
                    <Col span={22} >
                        <Title >Editar</Title>
                        <p >Modifcar un Articulo.</p>
                        <Form 
                            layout='vertical' 
                            onFinish={sendPublic} 
                            initialValues={dataItem}
                        >
                            <Form.Item 
                                name="id" 
                                label={`Id`}
                            >
                                <Input disabled />
                            </Form.Item>
                            <Form.Item 
                                name="rev" 
                                label={`Rev`}
                            >
                                <Input disabled />
                            </Form.Item>
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
                            <Form.Item 
                                name="stock" 
                                label={`Stock`}
                                rules={[{ required: true, message: 'Please input stock' }]}
                            >
                                <InputNumber />
                            </Form.Item>
                            <Form.Item >
                                <Button 
                                    type='primary'
                                    size='large'
                                    htmlType="submit"
                                >
                                    Guardar
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            :
                <GeneralSpin />
            }
            
        </div>
    )
}

export default EditItem