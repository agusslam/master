import React from 'react'
import {Col} from 'react-bootstrap'
import '../Panjang/Panjang.css'

const pjg3 = ({ aktif2 }) => {
    if(!aktif2){
        return <Col md="2" className="segipanjang-grey"></Col>
    }
    return <Col md="2" className="segipanjang"></Col>
}

export default pjg3