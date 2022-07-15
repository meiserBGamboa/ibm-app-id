import React from 'react'
import {Spin} from 'antd'

const GeneralSpin = ({size, description}) => {
	return (
		<div style={{textAlign: 'center', width: '100%'}} >
			<Spin 
				size={(size) ? size : "large"} 
				tip={(description) ? description : "Cargando..."} 
			/>
		</div>
	)
}

export default GeneralSpin