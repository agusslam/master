import React from 'react'
import {Col} from 'react-bootstrap'

const pjg = ({ aktif2 }) => {
    if(!aktif2){
        return <Col md="2" className="segipanjang-grey"></Col>
    }
    return <Col md="2" className="segipanjang"></Col>
}

export default pjg