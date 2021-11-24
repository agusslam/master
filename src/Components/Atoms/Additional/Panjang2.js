import React from 'react'
import {Col} from 'react-bootstrap'

const pjg2 = ({ aktif3 }) => {
    if(!aktif3){
        return (<Col md="2" className="segipanjang-grey"></Col>)
    }
    return (<Col md="2" className="segipanjang"></Col>)
}

export default pjg2