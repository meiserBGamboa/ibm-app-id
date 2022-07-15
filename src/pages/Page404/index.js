import React from 'react'
import { Result, Button } from 'antd'
import { Link } from 'react-router-dom'
import * as route from '../../utils/Routes'

const Page404 = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary"><Link to={route.dashboard} >Redirect Home</Link></Button>}
    />
  )
}

export default Page404