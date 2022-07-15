import { Button, Col, message, Row, Typography } from "antd"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/AuthContext"
import { deleteItem, getAllItems } from "../../services/items"
import GeneralSpin from "../GlobalComponent/GeneralSpin"

const { Title, Text } = Typography
const stylePage = {
    spaceContainer: {
        height: '100%',
        paddingTop: '30px',
        paddingBottom: '30px'
    },

}

const DashboardWrapper = () => {
    const {userTestIbm} = useContext(AuthContext)
    const [dataClips, setDataClips] = useState([])
	const [loading, setLoading] = useState(false)
    let navigate = useNavigate()
    useEffect(() => {
        const getData = async () => {
            const items = await getAllItems(userTestIbm.token)
            console.log(items)
            if(!items) return ;
            if(items.entries){
                setDataClips(items.entries)
                setLoading(true)
            } else {
                message.error('Error of get list.');
				setLoading(true)
            }
        }
        getData()
        
    }, [setDataClips, userTestIbm])

    const deleteArticle = async (value) => {
        const respond = await deleteItem(userTestIbm.token, value)
        console.log(respond)
        if(!respond) message.error('Error not respond endpoint')
        if(!respond.id) message.error('Error Articulo no encontrado.')
        else {
            const articles = dataClips.filter(itm => itm.id !== value.id && itm.rev !== value.rev)
            setDataClips(articles)
        }
    }

    const editArticle = async (value) => {
        await localStorage.setItem( 'articleEdit', JSON.stringify(value) )
        navigate(`/edit`)
    }

    return(
        <div >
            <Row 
                gutter={16} 
                style={stylePage.spaceContainer} 
            >
                {(loading) ? 
                    dataClips.map ((itm, index) => {
                        return(
                            <Col key={`col-card-${index}`} xs={22}
                                sm={8}
                                md={8}
                                lg={8}
                                xl={8} 
                                style={{
                                    padding: '2em 4em'
                                }}
                            >
                                <div key={`container-card-${index}`} style={{border: 'solid', padding: '1.5em'}}>
                                    <img key={`img-card-${index}`} src={itm.url} style={{width: '100%', marginBottom: '30px'}} alt={`img-${index}`} />
                                    <Title key={`title-card-${index}`} level={3} style={{marginBottom: '0'}} >{itm.name}</Title>
                                    <Text key={`time-card-${index}`} type="secondary" >{itm.createdAt}</Text>
                                    <p key={`text-card-${index}`} >{itm.descriptions}</p>
                                    <div key={`group-button-card-${index}`}  >
                                        <Button key={`button-edit-card-${index}`} type="primary" onClick={() => editArticle(itm)} style={{marginRight: '10px'}}>Editar</Button>
                                        <Button key={`button-delete-card-${index}`} type="primary" onClick={() => deleteArticle(itm)} >Eliminar</Button>
                                    </div>
                                </div>
                            </Col>
                        )
                    })
                :
                    <GeneralSpin />
                }
            </Row>
        </div>
    )
}

export default DashboardWrapper;