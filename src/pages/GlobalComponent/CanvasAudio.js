import React from 'react'
import { Col, Row, Typography } from "antd"
import {HeartOutlined, MessageOutlined} from '@ant-design/icons'

const { Title } = Typography

const CanvasAudio = ({
    name, 
    category,
    index
}) => {
    return (
        <div >
            <div >
                <Row 
                    gutter={16} 
                    key={`clip-line-${index}`}
                    style={{
                        marginBottom: '30px',
                        background: '#f7f7f7',
                        color: '#000',
                        padding: '20px'
                    }}
                >
                    <Col span={24} >
                        <Title level={3} style={{color: '#000'}} >{name}</Title>
                    </Col>
                    <Col span={24} >
                        <p >{category}</p>
                    </Col>
                    <Col span={6} >
                        <HeartOutlined style={{
                            fontSize: '24px',
                        }} />
                    </Col>
                    <Col span={8} >
                        <MessageOutlined style={{
                            fontSize: '24px',
                        }} /> Comments
                    </Col>
                    <Col span={24} >
                        <Row gutter={10} >
                            <Col span={4} >
                                icon play
                            </Col>
                            <Col span={10} >
                                line
                            </Col>
                            <Col span={4} >
                                icon vol
                            </Col>
                            <Col span={6} >
                                line vol
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default CanvasAudio